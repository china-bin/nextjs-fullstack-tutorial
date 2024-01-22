import React from 'react'

export default function pages({params}: {
  params: any
}) {
  console.log("params", params)
  return (
    <div>文章详情页 文章id: {params.postId}</div>
  )
}
