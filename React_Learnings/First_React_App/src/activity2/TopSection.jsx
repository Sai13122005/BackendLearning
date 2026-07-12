export default function Top({ title, description }) {
    return (
        <div style={{
            backgroundColor: "lightblue",
            borderRadius: "10px"

        }}>
            <h3 style={{display:"inline-block"}}>{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}