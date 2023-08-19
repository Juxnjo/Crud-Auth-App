/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from 'dayjs'
import utc from "dayjs/plugin/utc";
dayjs.extend( utc )


export const TaskFormPage = () =>
{
  const { register, handleSubmit, setValue, } = useForm()
  const { createTask, getTask, updateTask } = useTasks()
  const navigate = useNavigate()
  const params = useParams()

  useEffect( () =>
  {
    async function loadTask ()
    {
      if ( params.id )
      {
        const task = await getTask( params.id )
        console.log( task )
        setValue( 'title', task.title )
        setValue( 'description', task.description )
        setValue( 'date', dayjs.utc( task.date ).format( 'YYYY-MM-DD' ) )
      }
    }
    loadTask()
  }, [] )

  const onSubmit = handleSubmit( ( data ) =>
  {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc( data.date ).format() : dayjs.utc().format()
    }



    if ( params.id )
    {
      updateTask( params.id, dataValid )
    } else
    {
      createTask( dataValid )

    }
    navigate( '/tasks' )
  } )


  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className="bg-purple-800 max-w-md w-full p-10 rounded-md">
        <h1 className='text-2xl font-bold'>Create Task</h1>
        <form onSubmit={ onSubmit }>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            { ...register( 'title' ) }

            className="w-full bg-purple-700 text-white px-4 py-2 my-2"
            autoFocus />

          <label htmlFor="description">Description</label>
          <textarea
            rows="10"
            placeholder="Description"
            { ...register( 'description' ) }
            className="w-full bg-purple-700 text-white px-4 py-2 my-2"></textarea>

          <label htmlFor="date">Date</label>
          <input type="date" { ...register( 'date' ) } className="w-full bg-purple-700 text-white px-4 py-2 my-2" />

          <button className='bg-purple-500 w-full hover:bg-purple-700 text-white font-semibold my-2 py-2 px-4 rounded-md'>
            Save
          </button>

        </form>

      </div>
    </div>
  )
}
