import "./Product.css"
function Product({title, des = 'Description not available', price, feature}) {
    // des has default value
    // const list = feature.map((feature)=> <li>{feature}</li>);
    //conditionals
    // 1st way
    // 
    // 2nd Way
    // let isDiscount = price > 30000 ? "Discount: 5%": "";

    // conditional styling
    const style = {backgroundColor: price> 60000 ? "lightblue" : ""}
    return (
        <div className="Product" style={style}> 
            <h3>{title}</h3>
            <h4>{price}</h4>
            <h5>{des}</h5>
            <h5>{feature.map((feature)=> <li>{feature}</li>)}</h5>
            {/* <p>{isDiscount}</p> 2nd way */}
            {/* <p>{price > 30000 ? "Discount: 5%": ""}</p>  */}
            {/* in above conditional if it is empty string then there is extra p node in DOM which is useless */}
            {/* so we can use like follows */}
            {/* {price > 30000 ? <p>"Discount: 5%"</p>: null} */}
            {/* or */}
            {price > 30000 && <p>Discount: 5%</p>}
        </div>
    )
}
export default Product;