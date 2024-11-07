import { db } from '@/db'
import { notFound } from 'next/navigation'

export default async function SnippetEditPage({ params }) {
  const param = await params

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(param.id) },
  })

  if (!snippet) {
    notFound()
  }

  return (
    <form>
      <h3 className='font-bold m-3'> Edit Snippet! </h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            className='border rounded p-2 w-full'
          />
        </div>

        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Code
          </label>
          <textarea
            type='text'
            name='code'
            id='code'
            className='border rounded p-2 w-full'
          />
        </div>

        <button className='bg-blue-200 p-2 rounded'>Create</button>
      </div>
    </form>
  )
}
