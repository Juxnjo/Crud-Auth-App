import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth'

export const RegisterPage = () =>
{

    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit( async ( values ) =>
    {
        const res = await registerRequest( values )
        console.log( res )
    } )

    return (
        <div className='bg-purple-800 max-w-md p-10 rounded-md'>
            <form onSubmit={ onSubmit }>

                <input type="text" { ...register( 'username', { required: true } ) } className='w-full bg-purple-700 text-white px-4 py-2 rounded-md my-2' placeholder='Username' />

                <input type="email" { ...register( 'email', { required: true } ) } className='w-full bg-purple-700 text-white px-4 py-2 rounded-md my-2' placeholder='Email' />

                <input type="password" { ...register( 'password', { required: true } ) } className='w-full bg-purple-700 text-white px-4 py-2 rounded-md my-2' placeholder='Password' />

                <button type='submit'>Register</button>

            </form>

        </div>
    )
}
