'use client'

import { useActionState } from 'react'
import { createSnippet } from '@/actions'

export default function SnippetCreatePage() {
  const [formState, action] = useActionState(createSnippet, { message: '' })

  return (
    <form action={action}>
      <h3 className='font-bold m-3'> Create Snippet! </h3>
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

      {formState.message && (
        <div className='bg-red-300 mt-2 p-2 border rounded border-red-400'>
          <h3 className='text-gray-800'>{formState.message}</h3>
        </div>
      )}
    </form>
  )
}
