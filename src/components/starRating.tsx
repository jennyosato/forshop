import React from 'react'
import { FaStar } from 'react-icons/fa'
import clsx from 'clsx'

const StarRating = ({rating}:any) => {
  // console.log(rating)
    const star = Array(5).fill(0)
    const stars = star.map((_, index) => {
        return (
          <FaStar
            key={index}
            className={clsx(
              rating > index ? "text-orange-500 inline" : "text-gray-300"
            )}
          />
        );
      });
  return (
    <div className='flex'>{stars}</div>
  )
}

export default StarRating