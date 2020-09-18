export function generateVisiblePages(currentPage, lastPage) {
  const delta = 2
  const range = []

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(lastPage - 1, currentPage + delta);
    i += 1
  ) {
    range.push(i)
  }

  if (currentPage - delta > 2) {
    range.unshift('...')
  }

  if (currentPage + delta < lastPage - 1) {
    range.push('...')
  }

  range.unshift(1)

  if (lastPage !== 1) range.push(lastPage)

  return range
}
