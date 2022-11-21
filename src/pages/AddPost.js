import { useState } from 'react'

export default function AddPost() {
  const [form, setForm] = useState({})

  const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  console.log(form)

  return (
    <div className='container'>
      <h1>Add Post</h1>
      <form action=''>
        <label htmlFor=''>Author</label>
        <input name='author' type='text' onChange={handleForm} />

        <label htmlFor=''>Text</label>
        <input name='text' type='text' onChange={handleForm} />

        <label htmlFor=''>Date</label>
        <input name='date' type='date' onChange={handleForm} />
      </form>
    </div>
  )
}
