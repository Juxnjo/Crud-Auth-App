/* eslint-disable react/prop-types */
export function TaskCard ({task})
{
    return (
        <div className="bg-purple-800 max-w-md w-full p-10 rounded-md">
            <h1 className="text-2xl font-bold">{ task.title }</h1>
            <div>
                <button>Delete</button>
                <button>Edit</button>
            </div>
            <p className="text-slate-300">{ task.description }</p>
            <p>{new Date(task.date).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskCard