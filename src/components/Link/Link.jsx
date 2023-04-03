import React from 'react'

const Link = ({route}) => {
  return (
    <li className='mr-2 md:mr-12 text-xl'>
        <a href={route.route}>{route.name}</a>
    </li>
  )
}

export default Link