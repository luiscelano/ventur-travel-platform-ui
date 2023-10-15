import React from 'react'

const ProfileGroupIcon = ({ color }) => {
  return (
    <>
      <svg width="24" height="24" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M31.875 39.375V35.625C31.875 33.6359 31.0848 31.7282 29.6783 30.3217C28.2718 28.9152 26.3641 28.125 24.375 28.125H9.375C7.38588 28.125 5.47822 28.9152 4.0717 30.3217C2.66518 31.7282 1.875 33.6359 1.875 35.625V39.375"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.875 20.625C21.0171 20.625 24.375 17.2671 24.375 13.125C24.375 8.98286 21.0171 5.625 16.875 5.625C12.7329 5.625 9.375 8.98286 9.375 13.125C9.375 17.2671 12.7329 20.625 16.875 20.625Z"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.125 39.375V35.625C43.1238 33.9633 42.5707 32.349 41.5526 31.0356C40.5345 29.7223 39.109 28.7842 37.5 28.3688"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 5.86877C31.6133 6.28184 33.0432 7.22009 34.0643 8.53561C35.0855 9.85112 35.6397 11.4691 35.6397 13.1344C35.6397 14.7997 35.0855 16.4177 34.0643 17.7332C33.0432 19.0487 31.6133 19.987 30 20.4"
          stroke={color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}

export default ProfileGroupIcon
