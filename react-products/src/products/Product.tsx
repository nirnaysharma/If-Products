import { productDTO } from "./products.model";
import css from './Product.module.css'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRipple, MDBRow } from "mdb-react-ui-kit";

export default function Product(props: productDTO) {

    const buildLink = () => `/product/${props.id}`

    return (
        <>
            <div className={css.div}>
                <a href={buildLink()}>
                    <img alt="Thumbnail" src={props.thumbnail} />
                </a>
                <p>
                    <a href={buildLink()}>{props.title}</a>
                </p>
                {/* <p>
                <a href={buildLink()}>{props.description}</a>
            </p> */}
                <p>
                    <a href={buildLink()}>{props.price}</a>
                </p>
            </div>

        </>



/* <div className="row gx-3 align-items-center mb-3">
<div className="col-auto">
    <input type="text" className="form-control" id="title"
        placeholder="Title of the movie"
        {...formikProps.getFieldProps("title")}
    />
</div>
<div className="col-auto">
    <select className="form-select"
        {...formikProps.getFieldProps("genreId")}
    >
        <option value="0">--Choose a genre--</option>
        {genres.map(genre => <option key={genre.id}
            value={genre.id}
        >{genre.name}</option>)}
    </select>
</div>
<div className="col-auto">
    <div className="form-check">
        <Field className="form-check-input" id="upcomingReleases"
            name="upcomingReleases" type="checkbox" />
        <label className="form-check-label"
            htmlFor="upcomingReleases">Upcoming Releases</label>
    </div>
</div>
<div className="col-auto">
    <div className="form-check">
        <Field className="form-check-input" id="inTheaters"
            name="inTheaters" type="checkbox" />
        <label className="form-check-label"
            htmlFor="inTheaters">In Theaters</label>
    </div>
</div>
<div className="col-auto">
    <Button className="btn btn-primary"
        onClick={() => formikProps.submitForm()}
    >Filter</Button>
    <Button className="btn btn-danger ms-3"
        onClick={() => {
            formikProps.setValues(initialValues);
            searchMovies(initialValues)
        }}
    >Clear</Button>
</div>
</div> */






        // <>
        //     <MDBCol md="12" lg="4" className="mb-4">
        //         <MDBCard>
        //             <MDBRipple
        //                 rippleColor="light"
        //                 rippleTag="div"
        //                 className="bg-image rounded hover-zoom"
        //             >
        //                 <MDBCardImage
        //                     src={props.thumbnail}
        //                     fluid
        //                     className="w-100 image-thumbnail"
        //                 />
        //                 <a href="#!">
        //                     <div className="mask">
        //                         <div className="d-flex justify-content-start align-items-end h-100">

        //                         </div>
        //                     </div>
        //                     <div className="hover-overlay">
        //                         <div
        //                             className="mask"
        //                             style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
        //                         ></div>
        //                     </div>
        //                 </a>
        //             </MDBRipple>
        //             <MDBCardBody>
        //                 <a href="#!" className="text-reset">
        //                     <h5 className="card-title mb-3">{props.title}</h5>
        //                 </a>
        //                 <a href="#!" className="text-reset">
        //                     <p>{props.description}</p>
        //                 </a>
        //                 <h6 className="mb-3">€{props.price}</h6>
        //             </MDBCardBody>
        //         </MDBCard>
        //     </MDBCol>

        // </>
    )

}

// interface ProductProps {
//     onSearchChange: (searchValue: string) => void;
//   }