import API from "@/http/api";



async function fetchResourcesQuestions (page : number){
    const response =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API.articles}?page=${page}&limit=2`,
        {next:{revalidate:3600}
    })
    const data = await response.json()
    return data
}




async function fetchResourcesCount(){
    const response =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API["article-count"]}`,
        {next:{revalidate:3600}
    })
    const data = await response.json()
    return data
}

export  {fetchResourcesQuestions,fetchResourcesCount}