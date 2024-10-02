import API from "@/http/api";

async function fetchCommunityQuestions (page : number){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API.community}?page=${page}&limit=2`,
        {next:{revalidate:3600}
    })
    const data = await response.json()
    return data
}

async function fetchCommunityCount(){
    const response =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API["community-count"]}`,
        {next:{revalidate:3600}
    })
    const data = await response.json()
    return data
}

export  {fetchCommunityQuestions,fetchCommunityCount}