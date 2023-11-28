export const fetchUsers = async (context: any) => {
  const { pageParam } = context

  return await fetch(
    `https://randomuser.me/api?results=5&seed=jhonatan&page=${pageParam}`
  )
    .then(async (res) => {
      if (!res.ok) throw new Error('Ha habido un error')
      return await res.json()
    })
    .then((res) => {
      const currentPage = Number(res.info.page)
      const nextCursor = currentPage > 2 ? undefined : currentPage + 1
      return {
        users: res.results,
        nextCursor
      }
    })
}
