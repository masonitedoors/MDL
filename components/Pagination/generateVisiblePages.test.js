import { generateVisiblePages } from './generateVisiblePages'

describe('generateVisiblePages', () => {
  const firstPage = 1

  it('Should return an empty array if current page is 0', () => {
    const currentPage = firstPage
    const lastPage = 4
    const visiblePageNumbers = generateVisiblePages(currentPage, lastPage)
    expect(visiblePageNumbers).toEqual(expect.not.stringContaining('...'))
  })

  it('Should not return `...` within the array when there are only 4 totalPages pages ', () => {
    const currentPage = firstPage
    const lastPage = 4
    const visiblePageNumbers = generateVisiblePages(currentPage, lastPage)
    expect(visiblePageNumbers).toEqual(expect.not.stringContaining('...'))
  })

  it('Should return an array ending with `...`, followed by the last currentPage when the first currentPage is active', () => {
    const currentPage = firstPage
    const lastPage = 11
    const visiblePageNumbers = generateVisiblePages(currentPage, lastPage)
    expect(visiblePageNumbers).toEqual([1, 2, 3, '...', 11])
  })

  it('Should return an array beginning with the first currentPage, followed by `...` when the last currentPage is active', () => {
    const lastPage = 11
    const currentPage = lastPage
    const visiblePageNumbers = generateVisiblePages(currentPage, lastPage)
    expect(visiblePageNumbers).toEqual([1, '...', 9, 10, 11])
  })

  it('Should return `...` twice if the current currentPage is greater than 4 away from the first currentPage and less than 4 away from the last currentPage', () => {
    const lastPage = 101
    let currentPage
    let visiblePageNumbers

    currentPage = firstPage + 4
    visiblePageNumbers = generateVisiblePages(currentPage, lastPage)
    expect(visiblePageNumbers).toEqual([1, '...', 3, 4, 5, 6, 7, '...', 101])

    currentPage = lastPage - 4
    visiblePageNumbers = generateVisiblePages(currentPage, lastPage)
    expect(visiblePageNumbers).toEqual([1, '...', 95, 96, 97, 98, 99, '...', 101])
  })
})
