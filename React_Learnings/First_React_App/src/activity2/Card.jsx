import Top from "./TopSection"
import PriceSection from "./PriceSection"
export default function Card({ title, description, oldPrice, newPrice }) {

    return (
        <div style={{
            border: "solid black 1px",
            borderRadius: "10px",
            marginLeft: "10px",
            display: "flex",
            flexWrap : "wrap",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Top title={title} description={description} />
            <PriceSection oldPrice={oldPrice} newPrice={newPrice} />
        </div>
    )
}