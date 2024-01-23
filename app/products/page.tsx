import React from 'react'
async function getData() {
  const res = await fetch("http://localhost:3000/api/products", {
    method: "POST",

    body: JSON.stringify({
      aa: 11,
      bb: 22
    })
  })

  if (!res.ok) {
    throw new Error("failed fetch data")
  }
  return res.json()
}
export default async function page() {
  // const res = await getData()

  // console.log("res", res)

  return (
    <div>page</div>
  )
}
