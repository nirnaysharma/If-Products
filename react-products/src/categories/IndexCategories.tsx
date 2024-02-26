import axios, { AxiosResponse } from "axios"
import { useEffect } from "react"
import { urlCategories } from "../endpoints";

export default function IndexCategories(){

    useEffect(() => {
        axios.get(urlCategories)
        .then((response: AxiosResponse<string[]>) => {
            console.log(response.data);
        })
    }, [])

    return(
        <>
            <h3>Index Categories</h3>
        </>
    )
}