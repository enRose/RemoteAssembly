import moxios from 'moxios'

export const useReviewStub = () => {
  moxios.install()

  const seed = {
    userName: 'Bob',
    avatar: '',
    date: 'May 2019',
    memberSince: '1 Jan 1981',
    utterance: 'Absolutely loved this experience, more than we could\'ve even anticipated. Jannie was the perfect host - we are both relatively shy, awkward people so a photoshoot was a bit of an anxious notion for us! All those fears were immediately quelled upon meeting Jannie. She was incredibly friendly, knowledgeable and enthusiastic making us feel comfortable and confident in a situation we naturally aren\'t (getting our photos taken). She even brought us some local New Zealand chocolates and fresh banana bread she baked - which was super yum! The walk up the mountain was thoroughly enjoyable stopping at vantage points along the way and supplemented by Jannie\'s local information on New Zealand and delightful conversation. On our trip to New Zealand this was certainly one of the major highlights. An experience we will cherish for a very long time, beautifully and professionally captured in photos by Jannie. Can\'t recommend this enough!'
  }

  moxios.stubRequest(/openlibrary.org.*/, {
    status: 200,
    response: {
      data: {
        docs: Array(8).fill(0).map((_, _) => seed)
      }
    }
  })
}