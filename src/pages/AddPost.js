import { useState } from 'react'

export default function AddPost() {
  const [form, setForm] = useState({})

  const submitPost = e => {
    e.preventDefault()

    fetch('http://localhost:4040', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
  }

  const handleForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  console.log(form)

  return (
    <div className='container'>
      <h1>Add Post</h1>
      <form action='submit'>
        <label htmlFor=''>Author</label>
        <input name='author' type='text' onChange={handleForm} />
        <br />
        <label htmlFor=''>Text</label>
        <input name='text' type='text' onChange={handleForm} />
        <br />
        <label htmlFor=''>Date</label>
        <input name='date' type='date' onChange={handleForm} />
        <br />
        <button type='submit' onClick={submitPost}>
          Add new post
        </button>
      </form>
    </div>
  )
}
