import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";

export const TaskFormPage = () =>
{
  const { register, handleSubmit } = useForm()
  const {createTask} = useTasks()

  const onSubmit = handleSubmit( ( data ) =>
  {
    createTask(data)
  } )


  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className="bg-purple-800 max-w-md w-full p-10 rounded-md">
        <h1 className='text-2xl font-bold'>Create Task</h1>
        <form onSubmit={ onSubmit }>
          <input type="text" placeholder="Title" { ...register( 'title' ) } className="w-full bg-purple-700 text-white px-4 py-2 my-2" autoFocus />

          <textarea rows="10" placeholder="Description" { ...register( 'description' ) } className="w-full bg-purple-700 text-white px-4 py-2 my-2"></textarea>

          <button className='bg-purple-500 w-full hover:bg-purple-700 text-white font-semibold my-2 py-2 px-4 rounded-md'>
          Save
        </button>

        </form>

      </div>
    </div>
  )
}
