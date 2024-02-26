import Product from "./Product";
import { productDTO } from "./products.model"
import css from "./ProductList.module.css"
import Loading from "../utils/Loading";
import GenericList from "../utils/GenericList";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBIcon, } from "mdb-react-ui-kit";

export default function ProductList(props: productListProps) {

    return <GenericList list={props.products}>
        <div className={css.div} style={{alignItems: 'flex-start', rowGap: "5px"}}>

            {props.products?.map(product =>
                <Product {...product} key={product.id} />)}
        </div>
    </GenericList>

}

interface productListProps {
    products?: productDTO[];
}