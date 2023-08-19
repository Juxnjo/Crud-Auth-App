/* eslint-disable react/prop-types */

import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend( utc )

export function TaskCard ( { task } )
{

    const { deleteTask } = useTasks()

    return (
        <div className="bg-purple-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{ task.title }</h1>
                <div className="flex gap-x-2 items-center">
                    <button onClick={ () =>
                    {
                        deleteTask( task._id )
                    } } className='bg-zinc-500 w-full hover:bg-zinc-700 text-white font-semibold my-2 py-2 px-4 rounded-md'>Delete</button>
                    <Link to={ `/tasks/${ task._id }` } className='bg-purple-500 w-full hover:bg-purple-700 text-white font-semibold my-2 py-2 px-4 rounded-md'>Edit</Link>
                </div>
            </header>
            <p className="text-slate-300">{ task.description }</p>
            <p>{ dayjs( task.date ).utc().format( 'DD/MM/YYYY' ) }</p>
        </div>
    )
}

export default TaskCard