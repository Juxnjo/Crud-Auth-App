import { useForm } from 'react-hook-form'

export const LoginPage = () =>
{

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit( data =>
  {
    console.log( data )
  } )



  return (
    <div>

      <form onSubmit={ onSubmit }>

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

        <button type='submit'>Register</button>

      </form>
    </div>
  )
}
