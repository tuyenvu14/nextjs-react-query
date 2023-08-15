'use client'

import { useIdeasQuery } from '@/src/generated/graphql'
import React from 'react'

export default function NewlyAnnounced() {
  const { data: ideas } = useIdeasQuery({
    where: {},
    skip: 0,
    take: 10,
  })

  return (
    <div className="lg:col-span-3">
      <div>
        {ideas &&
          ideas.ideas?.nodes?.map((user: any, index: any) => <div key={index}>{user.title}</div>)}
      </div>
    </div>
  )
}
