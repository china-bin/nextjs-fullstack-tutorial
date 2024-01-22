import React from 'react'

export default function page({params}: {
    params: any
}) {
  return (
    <div>评论列表: 
        <div>文章ID: {params.postId}</div>
    </div>
  )
}
