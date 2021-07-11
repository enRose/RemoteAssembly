import React, { useState } from 'react'
import css from './read-more-style.module.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(css)

export const ReadMore = (props) => {
  const [readMore, setReadMore] = useState(false)

  const linkName = readMore ? 'Read Less << ' : 'Read More >> '

  return (
    <div className={cx({ 'read-more-fade': !readMore, 'read-more': true })}>
      <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><span>{linkName}</span></a>
      <p style={{ whiteSpace: 'pre-line' }}> {props.text}
      </p>
    </div>
  )
}

export default ReadMore