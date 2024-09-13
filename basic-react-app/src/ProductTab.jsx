import Product from "./product.jsx";

function ProductTab(){
    let styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    }
    return (
        <div style={styles}>
            <Product title="Apple Pencil (2nd Gen)" desc="Intuitive Touch Surface" features="Designed for iPad Pro" idx={1}/>
            <Product title="Zebronics" desc="Designed for iPad Pro" features="Intuitive Touch Surface" idx={2}/>
            <Product title="Petronics Toad" desc="Wireless Mouse 2.4GHz" features="Optical Orientation" idx={3}/>
            <Product title="Logitech MX Master" desc="8000 DPI" features="5 Programmable Buttons" idx={0}/>
        </div>
    );
}

export default ProductTab;