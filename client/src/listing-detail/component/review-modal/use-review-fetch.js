import { useState, useEffect } from "react"
import axios from "axios"
import { reviewSeed } from '../../stub/review-stub'

export const useReviewFetch = (query, pageNumber) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [reviews, setReviews] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setReviews([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setReviews(prevReviews => 
        [...new Set([...prevReviews, ...res.data.docs.map(b => ({...reviewSeed, userName: b.title}) )])]
      )
      setHasMore(res.data.docs.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, reviews, hasMore }
}