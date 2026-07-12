import Product from "./Product";
function ProductList()
{
    let features = ["Hitech","durable","Fast"]
    // let features = [<li>'Hitech'</li> ,<li>'durable'</li>, <li>'Fast'</li>];  // array
    return (
        <>
            <Product title={"Apple"} des={"17 max pro"} price={70000} feature={features} />
            <Product title={"Samsung"} des={"S26 Ultra"} price={80000} feature = {features}/>
            <Product title={"Google Pixel"} des={"Pixel 15"} price={60000} feature = {features}/>
            <Product title={"Realme"} price={30000} feature = {features}/>
            {/* above des is not given then default value is set */}
        </>
    )
}
export default ProductList;