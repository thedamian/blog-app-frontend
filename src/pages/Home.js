import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    fetch('http://localhost:4040/')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='container'>
      <h1>Home Component</h1>
      <div className='post'>allposts here</div>
    </div>
  )
}
