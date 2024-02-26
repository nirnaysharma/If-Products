import { useEffect, useState } from "react";
import ProductList from "./ProductList"
import { landingPageDTO } from "./products.model";
import axios, { AxiosResponse } from "axios";
import { urlProducts } from "../endpoints";
import Search from "../search/Search";

export default function LandingPage() {
    const [productsList, setProducts] = useState<landingPageDTO>();
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        axios.get(urlProducts)
            .then((response: AxiosResponse<landingPageDTO>) => {
                setProducts(response.data);
            })
    }, [])
    
  
    const handleSearchChange = (searchValue: string) => {
        setSearchTerm(searchValue);
    };

    const filteredProducts = productsList?.products?.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Search onSearchChange={handleSearchChange} />

            <div className="row">
                <ProductList products={filteredProducts} />
            </div>
        </>
    )

}