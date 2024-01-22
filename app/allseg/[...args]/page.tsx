import React from 'react'

export default function page({params}: {
    params: any
}) {

    console.log("params", params)
  return (
    <div>接收所有参数: {params.args.join("/")}
    </div>
  )
}
