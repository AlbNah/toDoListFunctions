import React from 'react'

const Input = (props) => {
  return (
    <input
        placeholder={props.placeholder}
        className={props.className}
        ref={props.myRef}
        onChange={props.onChange}
    />
  )
}

export default Input