import React from 'react'
import css from './avatar-initials-style.module.css'

export const AvatarInitials = (props) => {
  const target = React.Children.only(props.children)

  const randomColor = Math.floor(Math.random()*16777215).toString(16)

  const cloned = React.cloneElement(target, {
    'data-initials': `${props.firstName.charAt(0)}${(props.lastName || '').charAt(0)}`,
    className: `${props.style || ''}`,
    style: {'--random-colour-var': `#${randomColor}`}
  })

  return cloned
}

export default AvatarInitials