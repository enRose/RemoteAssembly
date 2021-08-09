import { useState, useEffect, useCallback } from "react"
import axios from "axios"

export default useReviewFetch = (hostId, pageNumber) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [reviews, setReviews] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => { 
    sendQuery(hostId)
  }, [hostId, sendQuery, pageNumber])

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true)
      setError(false)
      
      const res = await axios({
        method: 'GET',
        url: 'http://openlibrary.org/search.json',
        params: { q: hostId, page: pageNumber }
      })

      setReviews(prev => [...prev, ...res.data.reviews])

      setHasMore(res.data.reviews.length > 0)

      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }, [hostId, pageNumber])

  return { loading, error, reviews, hasMore }
}