import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

export const Navbar = () =>
{

    const { isAuthenticated, logout, user } = useAuth()

    return (
        <nav className="bg-purple-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to='/'>
                <h1 className="text-2xl font-bold">Tasks Manager</h1>
            </Link>
            <ul className="flex gap-x-2">
                { isAuthenticated ? (
                    <>
                        <li>
                            Welcome {user.username}
                        </li>
                        <li>
                            <Link to='/add-task' className='bg-zinc-500 w-full hover:bg-zinc-700 text-white font-semibold my-2 py-2 px-4 rounded-md'>Add Task</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={() => {
                                logout( ) 
                            }} className='bg-purple-500 w-full hover:bg-purple-700 text-white font-semibold my-2 py-2 px-4 rounded-md'>Logout</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login' className='bg-purple-500 hover:bg-purple-700 text-white font-semibold my-2 py-2 px-4 rounded-md'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register' className='bg-purple-500 hover:bg-purple-700 text-white font-semibold my-2 py-2 px-4 rounded-md'>Register</Link>
                        </li>
                    </>
                ) }
            </ul>
        </nav>
    )
}
