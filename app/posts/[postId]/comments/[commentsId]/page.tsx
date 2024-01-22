import React from 'react'

export default function page({params}: {
    params: any
}) {
  return (
    <div>文章对应的评论列表的详情: 
        <div>文章ID: {params.postId}</div>
        <div>评论ID: {params.commentsId}</div>
    </div>
  )
}
