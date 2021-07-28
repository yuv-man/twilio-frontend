
const BASE_URL = 'http://127.0.0.1:5000'

export const fetcher = async(content) => {
    const response = await fetch(`${BASE_URL}/api/call`, {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content
        }),
        
    })
    if (response.ok){
        console.log('response ok')
        const data = await response.json()
        return data
    } else {
        return('there is a problem')
    }
}

export const getStatus = async() => {
    const response = await fetch(`${BASE_URL}/api`)
    if (response.ok){
        const data = await response.json()
        return data
    } else {
        console.log('you can not get data')
    }
}
