import React from 'react'

const ProfileIcon = ({ color }) => {
  return (
    <>
      <svg width="39" height="39" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M43.3333 45.5V41.1667C43.3333 38.8681 42.4202 36.6637 40.7949 35.0384C39.1696 33.4131 36.9652 32.5 34.6667 32.5H17.3333C15.0348 32.5 12.8304 33.4131 11.2051 35.0384C9.57976 36.6637 8.66667 38.8681 8.66667 41.1667V45.5"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 23.8333C30.7865 23.8333 34.6667 19.9531 34.6667 15.1667C34.6667 10.3802 30.7865 6.5 26 6.5C21.2135 6.5 17.3333 10.3802 17.3333 15.1667C17.3333 19.9531 21.2135 23.8333 26 23.8333Z"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}

export default ProfileIcon
