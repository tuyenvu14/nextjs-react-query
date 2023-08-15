import { useQuery } from '@tanstack/react-query'

const fetchPosts = async (limit = 10) => {
    const parsed = await fetch('https://jsonplaceholder.typicode.com/posts').then(
        (res) => res.json())
    return parsed.filter((x: any) => x.id <= limit)
}

const usePosts = (limit: any) => {
    return useQuery({
        queryKey: ['posts', limit],
        queryFn: () => fetchPosts(limit),
    })
}

export { usePosts, fetchPosts }
