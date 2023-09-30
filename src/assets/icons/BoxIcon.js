import React from 'react'

const BoxIcon = ({ color }) => {
  return (
    <>
      <svg width="39" height="39" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30.9375 17.625L14.0625 7.89374"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M39.375 30V15C39.3743 14.3424 39.2007 13.6965 38.8716 13.1272C38.5425 12.5578 38.0695 12.0851 37.5 11.7562L24.375 4.25625C23.8049 3.92712 23.1583 3.75385 22.5 3.75385C21.8417 3.75385 21.1951 3.92712 20.625 4.25625L7.5 11.7562C6.93049 12.0851 6.45746 12.5578 6.12837 13.1272C5.79927 13.6965 5.62567 14.3424 5.625 15V30C5.62567 30.6576 5.79927 31.3035 6.12837 31.8728C6.45746 32.4422 6.93049 32.9149 7.5 33.2437L20.625 40.7437C21.1951 41.0729 21.8417 41.2462 22.5 41.2462C23.1583 41.2462 23.8049 41.0729 24.375 40.7437L37.5 33.2437C38.0695 32.9149 38.5425 32.4422 38.8716 31.8728C39.2007 31.3035 39.3743 30.6576 39.375 30Z"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.13126 13.05L22.5 22.5187L38.8688 13.05"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 41.4V22.5"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}

export default BoxIcon
