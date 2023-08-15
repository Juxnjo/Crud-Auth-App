import { useForm } from 'react-hook-form'

export const LoginPage = () =>
{

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit( data =>
  {
    console.log( data )
  } )



  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-purple-800 max-w-md w-full p-10 rounded-md '>
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

          <button type='submit' className='bg-purple-500 w-full hover:bg-purple-700 text-white font-semibold my-2 py-2 px-4 rounded-md'>Login</button>

        </form>
      </div>

    </div>
  )
}
