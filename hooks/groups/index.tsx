"use client"
import { useEffect, useState, useCallback } from "react"
import { useQuery } from "@tanstack/react-query"
import { onSearchGroups } from "@/actions/groups"

export const useSearch = (searchType: "GROUPS" | "POSTS") => {
  const [query, setQuery] = useState<string>("")
  const [debounce, setDebounce] = useState<string>("")
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [searchResults, setSearchResults] = useState<any[]>([])

  const onSearchQuery = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }, [])

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebounce(query)
    }, 1000)
    return () => clearTimeout(delayInputTimeoutId)
  }, [query])

  const { refetch, data, isFetched, isFetching } = useQuery({
    queryKey: ["search-data", debounce],
    queryFn: async ({ queryKey }) => {
      if (searchType === "GROUPS") {
        const groups = await onSearchGroups(searchType, queryKey[1])
        return groups
      }
      // } else {
      //   const posts = await onSearchPosts(searchType, queryKey[1])
      //   return posts
      // }
    },
    enabled: false,
  })

  useEffect(() => {
    if (isFetching) {
      setIsSearching(true)
    }

    if (isFetched) {
      setIsSearching(false)
      setSearchResults(data?.groups || [])
    }
  }, [isFetching, isFetched, data])

  useEffect(() => {
    if (debounce) {
      refetch()
    } else {
      setSearchResults([])
    }
  }, [debounce, refetch])

  return {
    query,
    onSearchQuery,
    isSearching,
    searchResults,
  }
}
