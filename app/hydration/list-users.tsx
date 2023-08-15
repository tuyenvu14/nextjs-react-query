'use client'

import { useIdeasQuery } from '@/src/generated/graphql'
import React from 'react'

export default function ListUsers() {
  const { data: ideas } = useIdeasQuery({
    where: {},
    skip: 0,
    take: 10,
  })

  // console.log(data, '---------------hydrate-users')
  console.log(ideas, '---------------ideas')

  return (
    <div className="lg:col-span-3">
      {/* {
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 20,
          }}
        >
          {data?.map((user) => (
            <div key={user.id} style={{ border: '1px solid #ccc', textAlign: 'center' }}>
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ height: 180, width: 180, margin: 'auto' }}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      } */}
      <div>
        {ideas &&
          // @ts-ignore
          ideas.ideas?.nodes?.map((user: any, index: any) => <div key={index}>{user.title}</div>)}
      </div>
    </div>
  )
}
