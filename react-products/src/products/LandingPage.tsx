import { useEffect, useState } from "react";
import ProductList from "./ProductList"
import { landingPageDTO } from "./products.model";
import axios, { AxiosResponse } from "axios";
import { urlProducts } from "../endpoints";
import GenericList from "../utils/GenericList";
import { MDBCard, MDBCol, MDBContainer, MDBRipple, MDBRow } from "mdb-react-ui-kit";
import Product from "./Product";
import Search from "../search/Search";

export default function LandingPage() {
    const [productsList, setProducts] = useState<landingPageDTO>();
    const [searchTerm, setSearchTerm] = useState<string>('');

    // useEffect(() => {
    //     loadData();
    // }, []);

    // function loadData() {
    //     axios.get(urlProducts).then((response: AxiosResponse<landingPageDTO>) => {
    //         setProducts(response.data);
    //     })
    // }

    useEffect(() => {
        axios.get(urlProducts)
            .then((response: AxiosResponse<landingPageDTO>) => {
                setProducts(response.data);
                //console.log(response.data);
                console.log("useEffect LandingPage.tsx");
            })
    }, [])
    
  
    const handleSearchChange = (searchValue: string) => {
        setSearchTerm(searchValue);
        console.log("handleSearchChange");
    };

    const filteredProducts = productsList?.products?.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
        //console.log(product.title.toLowerCase().includes(searchTerm.toLowerCase());
    );

    // useEffect(() => {
    //     axios.get(urlProducts)
    //     .then((response: AxiosResponse<landingPageDTO[]>) => {
    //         setProducts(response.data);
    //         //console.log(response.data);
    //     })
    // }, [])

    // useEffect(() => {
    //     const timerId = setTimeout(() => {
    //         setProducts({
    //             products: [
    //                 {
    //                     id: 1,
    //                     title: 'iPhone',
    //                     thumbnail: 'https://www.gigantti.fi/image/dv_web_D1800010021625859/673005/iphone-15-5g-alypuhelin-128-gb-musta--pdp_zoom-3000--pdp_main-960.jpg'
    //                 },
    //                 {
    //                     id: 2,
    //                     title: 'macbook Pro',
    //                     thumbnail: 'https://cdn.verk.net/kuvastin/w:816/h:510/rt:fit/q:80/sh:0.5/plain/images/13/2_907363-4000x4000.jpeg'
    //                 }
    //             ],
    //             limit: 10,
    //             skip: 10,
    //             total: 50
    //         })
    //     }, 1000)
    // })

    return (
        <>
            {/* <h3>Products</h3> */}
            {/* 
            <MDBContainer fluid className="my-5 text-center text-center">
                <h4 className="mt-4 mb-5">
                    <strong>Products</strong>
                </h4>

                <MDBRow>
                    <ProductList products={productsList?.products} />
                </MDBRow >
            </MDBContainer> */}










            {/* <div className="row">
                <ProductList products={productsList?.products} />
            </div> */}

            {/* Pass the callback to the Search component */}
            <Search onSearchChange={handleSearchChange} />

            <div className="row">
                <ProductList products={filteredProducts} />
            </div>




        </>
    )

}