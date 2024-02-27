import { productDTO } from "./products.model";
import './Product.module.css';

export default function Product(props: productDTO) {
    return (
        <>
            <div className="itemContainer">
                <div className="itemContainerRoot" >
                    <div className="imageContainer">
                    {props.discountPercentage > 0 && (
                            <div className="discountCircle">
                                <p className="discountText">{Math.round(props.discountPercentage)}% off</p>
                            </div>
                        )}
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
                            <p>
                            €{props.price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
