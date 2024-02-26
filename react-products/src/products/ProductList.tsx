import Product from "./Product";
import { productDTO } from "./products.model"
import css from "./ProductList.module.css"
import GenericList from "../utils/GenericList";

export default function ProductList(props: productListProps) {

    return <GenericList list={props.products}>
        <div className={css.div + " itemDiv"}>

            {props.products?.map(product =>
                <Product {...product} key={product.id} />)}
        </div>
    </GenericList>

}

interface productListProps {
    products?: productDTO[];
}