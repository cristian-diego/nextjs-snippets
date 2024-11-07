import { db } from '@/db'
import Link from 'next/link'

export const revalidate = 0

export default async function Home() {
  const snippets = await db.snippet.findMany()

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        className='flex justify-between items-center p-4 border rounded my-4'
        href={`/snippets/${snippet.id}`}
      >
        <div key={snippet.id}>
          <h3 className='text-xl'>{snippet.title}</h3>
          <pre className='text-lg'>{snippet.code}</pre>
        </div>
      </Link>
    )
  })

  return (
    <div className='container'>
      <div className='flex justify-between items-center gap-4 mt-10'>
        <h1 className='text-xl bold'>Snippets</h1>
        <Link
          className='text-xl bold border rounded-xl p-4'
          href='/snippets/new'
        >
          New
        </Link>
      </div>
      {renderedSnippets}
    </div>
  )
}
