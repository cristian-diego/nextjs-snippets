import { db } from '@/db'
import { notFound, redirect } from 'next/navigation'
import { deleteSnippet } from '@/actions'
import Link from 'next/link'

export default async function SnippetDetail({ params }) {
  const param = await params

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(param.id) },
  })

  if (!snippet) {
    notFound()
  }

  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id)

  return (
    <div className='mt-10'>
      <div>View Snnipet </div>
      <div className='border rounded p-4'>
        <h3 className='text-xl'>{snippet.title}</h3>
        <pre className='text-lg'>{snippet.code}</pre>
      </div>

      <div className='flex mt-4 gap-4'>
        {/*
         <Link href={`/snippets/${snippet.id}/edit`}>
          <button className='border rounded p-2'>Edit</button>
        </Link> 
        */}
        <form action={deleteSnippetAction}>
          <button className='border rounded p-2 bg-red-400 hover:bg-red-800'>
            Delete
          </button>
        </form>
      </div>
    </div>
  )
}
