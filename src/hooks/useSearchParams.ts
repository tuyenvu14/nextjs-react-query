'use client'

import _ from 'lodash'
import queryString from 'query-string'
import { useEffect, useState } from 'react'

export const useSearchParams = (search: string) => {
  const [searchParams, setSearchParams] = useState(
    queryString.parse(search, { arrayFormat: 'bracket' })
  )

  useEffect(() => {
    setSearchParams(queryString.parse(search, { arrayFormat: 'bracket' }))
  }, [search])

  return searchParams
}

export const useUpdateSearch = (pathname: string, router: any) => {
  const handleSearchClick = (value: any) => {
    let params = value
    router.push(
      `${pathname}?${queryString.stringify(_.pickBy(params, _.identity), {
        arrayFormat: 'bracket',
        skipEmptyString: true,
      })}`
    )
  }

  return { handleSearchClick }
}
