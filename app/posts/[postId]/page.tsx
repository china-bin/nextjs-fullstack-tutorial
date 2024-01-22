import React from 'react'

async function getData({id}:any) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`)

  if (!res.ok) {
    throw new Error("failed fetch data")
  }
  return res.json()
}

export default async function pages({params}: {
  params: any
}) {
  console.log("params", params)
  const data = await getData({id: params.postId})
  return (
    <div>
    <div>文章详情页 文章id: {params.postId}</div>
    <div>内容: {data.body}</div>
    </div>

   
  )
}
