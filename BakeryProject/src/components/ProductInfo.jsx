import {useParams} from "react-router-dom"

function ProductInfo() {

    let {productName} = useParams();

    return(
        <p> Product Name: {productName}</p>
    )

}

export default ProductInfo