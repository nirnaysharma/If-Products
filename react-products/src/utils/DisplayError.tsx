export default function DisplayErrors(props: displayErrorProps){
    const style = {color: 'red'};
    return(
        <>
            {props.errors ? <ul>
                {props.errors.map((error, index) => <li key={index}>{error}</li>)}
                 </ul>: null}
        </>
    )       
}

interface displayErrorProps{
    errors?: string[];
}