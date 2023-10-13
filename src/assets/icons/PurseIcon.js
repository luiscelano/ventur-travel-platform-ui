import React from 'react'

const PurseIcon = ({ color }) => {
  return (
    <>
      <svg width="24" height="24" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.25 3.75L5.625 11.25V37.5C5.625 38.4946 6.02009 39.4484 6.72335 40.1516C7.42661 40.8549 8.38044 41.25 9.375 41.25H35.625C36.6196 41.25 37.5734 40.8549 38.2766 40.1516C38.9799 39.4484 39.375 38.4946 39.375 37.5V11.25L33.75 3.75H11.25Z"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.625 11.25H39.375"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 18.75C30 20.7391 29.2098 22.6468 27.8033 24.0533C26.3968 25.4598 24.4891 26.25 22.5 26.25C20.5109 26.25 18.6032 25.4598 17.1967 24.0533C15.7902 22.6468 15 20.7391 15 18.75"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}

export default PurseIcon
