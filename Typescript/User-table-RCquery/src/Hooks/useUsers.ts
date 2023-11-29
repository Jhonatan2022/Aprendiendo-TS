import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUsers } from '../Services/users'
import { type User } from '../Types/types'

interface Props {
  nextCursor?: number
  users: User[]
}

function useUsers() {
  const { isError, isLoading, data, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQuery<Props>({
      queryKey: ['users'],
      // queryFn: async ({ pageParam }: any) => await fetchUsers(pageParam),
      queryFn: fetchUsers,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5 // 5 minutes
    })

  return {
    isError,
    isLoading,
    users: data?.pages.flatMap((page) => page.users) ?? [],
    refetch,
    fetchNextPage,
    hasNextPage
  }
}

export { useUsers }
