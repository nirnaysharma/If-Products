import { productDTO } from "./products.model";
import './Product.module.css';

export default function Product(props: productDTO) {

    return (
        <>
            <div className="itemContainer">
                <div className="itemContainerRoot" >
                    <div className="imageContainer">
                        <img className="thumbnailImage" alt="Thumbnail" src={props.thumbnail} />
                    </div>

                    <div className="itemDetailContainer">
                        <div>
                            <p className="itemTitle">
                                {props.title}
                            </p>
                        </div>

                        <div>
                            <p className="itemDescription">
                                {props.description}
                            </p>
                        </div>

                        <div className="itemPrice">
                            <p className="" >
                                {props.price}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}
