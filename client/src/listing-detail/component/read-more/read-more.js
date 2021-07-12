import React, { useState, useEffect, useRef } from 'react'
import css from './read-more-style.module.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(css)

export const ReadMore = (props) => {
  const [readMore, setReadMore] = useState(false)
  const [numOfLines, setNumOfLines] = useState()
  const textPara = useRef(null)

  useEffect(() => {
    const totalHeight = textPara.current.clientHeight

    const lineHeight = 1.5 * 16

    setNumOfLines(totalHeight / lineHeight)
  },[])

  const linkName = readMore ? 'Read Less << ' : 'Read More >> '

  return (
    <div className={cx({ 'read-more-fade': !readMore, 'read-more': true })}>
      { 
        numOfLines > 4 &&
        <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><span>{linkName}</span></a>
      }
      <p ref={textPara} style={{ whiteSpace: 'pre-line' }}> {props.text}
      </p>
    </div>
  )
}

export default ReadMore