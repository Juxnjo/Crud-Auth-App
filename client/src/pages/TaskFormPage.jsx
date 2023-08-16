import { useForm } from "react-hook-form";

export const TaskFormPage = () =>
{
  const {register, handleSubmit} = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Title" {...register('title')} autoFocus />
        <textarea rows="10" placeholder="Description" {...register('description')}></textarea>
        <button>
          Save
        </button>
      </form>

    </div>
  )
}
