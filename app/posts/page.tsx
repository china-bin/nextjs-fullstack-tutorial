import Link from 'next/link';
import React from 'react'

async function getData() {
  const res = await fetch("https://dummyjson.com/posts")

  if (!res.ok) {
    throw new Error("failed fetch data")
  }
  return res.json()
}

export default async function page() {
  const data = await getData();
  // console.log("data", data)
  return (
    <div>
      文章列表
      <ul>{data.posts.map((item: any) => (<li key={item.id}> <Link href={`/posts/${item.id}`}>{item.title}</Link></li>))}</ul>
    </div>
  )
}
