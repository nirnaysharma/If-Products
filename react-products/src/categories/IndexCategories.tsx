import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { urlCategories } from "../endpoints";
import GenericList from "../utils/GenericList";

export default function IndexCategories(){

    // const[categories, setCategogies] = useState<categoriesDTO>
    useEffect(() => {
        axios.get(urlCategories)
        .then((response: AxiosResponse<string[]>) => {
            console.log(response.data);
        })
    }, [])

    return(
        <>
            <h3>Index Categories</h3>

            {/* <GenericList list={cate}>
            
            </GenericList> */}
        </>

      
    )
}