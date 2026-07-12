import Card from "./Card"
export default function AmazonCards()
{
    let des1 = ["d1", "d2", "d3"];
    return (
        <div style={{
            display: "flex",
            flexWrap : "wrap",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Card title={"Item1"} description={des1.map((des1)=> <li> {des1} </li>)} oldPrice={3000} newPrice={2000}/>
            <Card title={"Item1"} description={des1.map((des1)=> <li> {des1} </li>)} oldPrice={3000} newPrice={2000}/>
            <Card title={"Item1"} description={des1.map((des1)=> <li> {des1} </li>)} oldPrice={3000} newPrice={2000}/>            
        </div>
    )
}