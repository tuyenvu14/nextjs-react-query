import { QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { resolve } from 'path'
interface Post {
  id: string
  title: string
}

interface PageProps {
  post: Post
}
export default function Home({ post }: PageProps) {
  return (
    <>
      Home
      <div>{post?.id}</div>
      <div>{post?.title}</div>
    </>
  )
}
