import "./Product.css"
import Price from "./price.jsx";

function Product({title, desc, features, idx}){
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];

    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>{features}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
        
    );
}

export default Product;