import * as React from 'react'

export const Pagination = ({ data, itemsForEachPage }) => {
  const [paginatedData, setPaginatedData] = React.useState(data)
  const [currentPageData, setCurrentPageData] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [totalPage, setTotalPage] = React.useState(0)
  const [noOfDataLines, setNoOfDataLines] = React.useState(itemsForEachPage / page)

  React.useEffect(() => {
    setCurrentPageData(paginatedData.slice(0, 5))
    setTotalPage(Math.ceil(paginatedData.length / 5))
  }, [paginatedData])

  const handleNextClick = () => {
    setNoOfDataLines(noOfDataLines + 5)
    setPage(page + 1)
    setCurrentPageData(paginatedData.slice(0 + noOfDataLines, 5 + noOfDataLines))
  }

  const handlePrevClick = () => {
    setNoOfDataLines(noOfDataLines - 5)
    setPage(page - 1)
    setCurrentPageData(paginatedData.slice(noOfDataLines - 5, noOfDataLines))
  }

  const [currentPage, setCurrentPage] = React.useState(1)
  const [itemsPerPage, setItemsPerPage] = React.useState(itemsForEachPage)

  const pages = []
  for (
    let i = 0;
    i <= Math.ceil(paginatedData.length / itemsForEachPage);
    i++
  ) {
    pages.push(i)
  }

  let indexOfLastItem = currentPage * itemsPerPage
  let indexOfFirstItem = indexOfLastItem - itemsForEachPage
  const currentItems = paginatedData.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <>
      <div>
        <h3>pagination</h3>
        <h3>Total pages: {totalPage}</h3>
      </div>
      <div>
        <ul>
          {currentPageData.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <>
          <button disabled={page === 1} onClick={handlePrevClick}>
            {' '}
            Previous{' '}
          </button>
          Page: {page}
          <button disabled={page === totalPage} onClick={handleNextClick}>
            {' '}
            Next{' '}
          </button>
        </>
      </div>
    </>
  )
}
