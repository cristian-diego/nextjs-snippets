'use server'
import { db } from '@/db'
import { redirect } from 'next/navigation'

export async function deleteSnippet(id) {
  console.log('deleting', id)

  await db.snippet.delete({
    where: { id },
  })
  console.log('deleted')

  redirect('/')
}

export async function createSnippet(formState, formData) {
  try {
    const title = formData.get('title')
    const code = formData.get('code')

    if (!title || !code) {
      return { message: 'Title and code are required' }
    }

    const snippet = await db.snippet.create({ data: { title, code } })

    console.log(snippet)
  } catch (error) {
    console.error(error)
    return { message: error.message }
  }

  redirect('/')
}
