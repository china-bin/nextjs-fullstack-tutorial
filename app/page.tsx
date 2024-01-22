import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col p-2'>
      <div className='text-lg font-bold mb-3'>目录导航</div>
      <ul>
        <li>
        <Link href="/staticPage" >静态路由</Link>
        </li>
      </ul>
      
    </div>
  )
}
