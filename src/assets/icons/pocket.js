import React from 'react'

const goalIcon = ({ color }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pocket">
      <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
      stroke={color || 'black'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
        
      </path>
        <polyline points="8 10 12 14 16 10"
        stroke={color || 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"></polyline>
      </svg>
    </>
  )
}

export default goalIcon