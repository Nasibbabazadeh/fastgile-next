import API from "@/http/api";

async function fetchCommunityQuestions (page : number){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API.community}?page=${page}&limit=2`,
        {next:{revalidate:3600}
    })
    const data = await response.json()
    return data
}

async function fetchCommunityCount(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API["community-count"]}`,
        {next:{revalidate:3600}
    })
    const data = await response.json()
    return data
}

  async function filterHandle(searchTerm: URLSearchParams): Promise<any | undefined> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API["community-filter"]}${searchTerm}`)
        if (!response) {
            throw new Error('Error happened')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error verifying OTP:', error)
    }
}

 const askQuestion = async(title : string,description : string): Promise<any | undefined> => { // Will be authToken!!!
    try {
        const response = await fetch(API["ask-question-community"], {
            method:'POST',
            body:JSON.stringify({
                title:title, 
                description:description
            })
          })
        if (!response) {
            throw new Error('Error happened')
        }
        return response
    } catch (error) {
        console.error(error)
    }
}

export {fetchCommunityQuestions,fetchCommunityCount,askQuestion,filterHandle}



export const getQuestionDetails = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API['community-details']}communityId=${id}`)
    const data = response.json()    
    return data
}
export const replyQuestionById = async (id: string, description:string)=> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API["community-reply"]}`,{
        method: 'POST',
        body : JSON.stringify({ 
            communityId : id,
            description
        })
        
    })
    return response
}