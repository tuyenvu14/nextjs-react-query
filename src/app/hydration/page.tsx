'use client'
import { dehydrate } from '@tanstack/query-core'
import ListUsers from './list-users'
import { User } from '../types'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useState } from 'react'

// async function getUsers() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const users = (await res.json()) as User[]
//   return users
// }

export default function Hydation() {
  const [expanded, setExpanded] = useState(false)

  if (expanded) {
    return (
      <div className="h-96 border border-gray-300 py-4 flex flex-col justify-between transition-all duration-500 cursor-pointer">
        <h1 className="text-xl">
          Expanded!
          <br />
          Here is some content
          <br />
          split across multiple lines
          <br />
          so the height changes
        </h1>
        <button
          className="text-blue-500 underline focus:outline-none"
          onClick={() => setExpanded(false)}
        >
          collapse
        </button>
      </div>
    )
  } else {
    return (
      <div className="h-32 border border-gray-300 py-4 flex flex-col justify-between transition-all duration-500 cursor-pointer">
        <h1 className="text-xl">Collapsed</h1>
        <button
          className="text-blue-500 underline focus:outline-none"
          onClick={() => setExpanded(true)}
        >
          expand
        </button>
      </div>
    )
  }
}
