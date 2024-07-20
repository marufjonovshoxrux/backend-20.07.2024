import { toaster } from "./utils.js"

const baseUrl = 'http://localhost:8080'

export async function getData(path) {
    try {
        const res = await fetch(baseUrl + path)

        if (res.status === 200 || res.status === 201) {
            const data = await res.json()
            toaster('Posted successfully', 'green')
            return data
        } 

    } catch {
        toaster(Error.message,'red')
        return []
    }
}

export async function postData(path,body) {
    try {
        const res = await fetch(baseUrl + path, {
            method: 'POST',
            body: JSON.stringify(body)
        })

        if (res.status === 200 || res.status === 201) {
            const data = await res.json()
            toaster('Posted successfully', 'green')
            return data
        }
    } catch {
        toaster(Error.message, 'red')
        return []
    }
}