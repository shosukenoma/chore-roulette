import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit, formState: {errors} } = useForm()

  function onSubmit(data) {
    console.log(data)
    alert("Successful!")
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name1" style={{display: "block"}} >Name 1</label>
        <input id={"name1"} style={{display: "block"}}  type="text" {...register("name1", {required: {value: true, message: "Required"}, 
        validate: value => {
          if (!value.match(/[A-Z]/)) {
            return "Must include at least one uppercase letter"
          }
        }})}/>
        {errors?.name1?.message && <p>{errors?.name1?.message}</p>}
        <label htmlFor="name2" style={{display: "block"}} >Name 2</label>
        <input id={"name2"} style={{display: "block"}}  type="text" {...register("name2", {required: {value: true, message: "Required"}, 
        validate: value => {
          if (!value.match(/[A-Z]/)) {
            return "Must include at least one uppercase letter"
          }
        }})}/>
        {errors?.name2?.message && <p>{errors?.name2?.message}</p>}
        <label htmlFor="name3" style={{display: "block"}} >Name 3</label>
        <input id={"name3"} style={{display: "block"}}  type="text" {...register("name3", {required: {value: true, message: "Required"}, 
        validate: value => {
          if (!value.match(/[A-Z]/)) {
            return "Must include at least one uppercase letter"
          }
        }})}/>
        {errors?.name3?.message && <p>{errors?.name3?.message}</p>}
        <label htmlFor="name4" style={{display: "block"}} >Name 4</label>
        <input id={"name4"} style={{display: "block"}}  type="text" {...register("name4", {required: {value: true, message: "Required"}, 
        validate: value => {
          if (!value.match(/[A-Z]/)) {
            return "Must include at least one uppercase letter"
          }
        }})}/>
        {errors?.name4?.message && <p>{errors?.name4?.message}</p>}
        <button>Register</button>
      </form>

    </>
  )
}

export default App
