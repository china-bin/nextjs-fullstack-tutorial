import mockData from "./mockData";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    // get参数
    console.log("get url参数", searchParams)
   
    return Response.json(mockData)
  }

  export async function POST(request:Request) {
    // post formData
    const formData = await request.formData()
    console.log("formData",formData)
    return Response.json(mockData)
  }