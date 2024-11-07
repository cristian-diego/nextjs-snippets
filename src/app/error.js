'use client'

export default function ErrorPage({ error }) {
  console.log('error', error)

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Error</h1>
      <h2 className='text-2xl font-bold'>{error.message}</h2>
    </div>
  )
}