import React from 'react'

const CloseIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width || '50'}
      height={height || '50'}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.59375 6.38428L6.38428 8.59375L7.49512 9.69238L22.7905 25L6.38428 41.4062L8.59375 43.6157L25 27.2095L40.2954 42.5171L41.4062 43.6157L43.6157 41.4062L42.5171 40.2954L27.2095 25L43.6157 8.59375L41.4062 6.38428L25 22.7905L9.69238 7.49512L8.59375 6.38428Z"
        fill={color || 'black'}
      />
    </svg>
  )
}

export default CloseIcon
