import React from 'react'

const HomeIcon = ({ color }) => {
  return (
    <>
      <svg width="24" height="24" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.875 14.625L19.5 3.25L34.125 14.625V32.5C34.125 33.362 33.7826 34.1886 33.1731 34.7981C32.5636 35.4076 31.737 35.75 30.875 35.75H8.125C7.26305 35.75 6.4364 35.4076 5.8269 34.7981C5.21741 34.1886 4.875 33.362 4.875 32.5V14.625Z"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.625 35.75V19.5H24.375V35.75"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}

export default HomeIcon
