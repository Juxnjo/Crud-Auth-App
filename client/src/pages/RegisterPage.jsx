import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'


export const RegisterPage = () =>
{

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate()

    useEffect( () =>
    {
        if ( isAuthenticated ) navigate( '/tasks' )

    }, [ isAuthenticated ] )

    const onSubmit = handleSubmit( async ( values ) =>
    {
        signup( values )
    } )

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center '>

            <div className='bg-purple-800 max-w-md w-full p-10 rounded-md '>

                {
                    registerErrors.map( ( error, i ) => (
                        <div className='bg-red-500 p2 text-white text-center my-2' key={ i }>
                            { error }
                        </div>
                    ) )
                }

                <h1 className='text-2xl font-bold'>Register</h1>

                <form onSubmit={ onSubmit }>

                    <input type="text" { ...register( 'username', { required: true } ) } className='w-full bg-purple-700 text-white px-4 py-2 rounded-md my-2' placeholder='Username' />

                    {
                        errors.username && (
                            <p className='text-red-500'>Username is required</p>
                        )
                    }

                    <input type="email" { ...register( 'email', { required: true } ) } className='w-full bg-purple-700 text-white px-4 py-2 rounded-md my-2' placeholder='Email' />

                    {
                        errors.email && (
                            <p className='text-red-500'>Email is required</p>
                        )
                    }

                    <input type="password" { ...register( 'password', { required: true } ) } className='w-full bg-purple-700 text-white px-4 py-2 rounded-md my-2' placeholder='Password' />

                    {
                        errors.password && (
                            <p className='text-red-500'>Password is required</p>
                        )
                    }

                    <button type='submit' className='bg-purple-500 w-full hover:bg-purple-700 text-white font-semibold my-2 py-2 px-4 rounded-md'>Register</button>

                </form>
                <p className='flex gap-x-2 justify-between'>
                    Already have an account? <Link to="/login" className='text-sky-500'>Sign in</Link>
                </p>

            </div>



        </div>
    )
}
