function Message({ user, color }) {
    return (
        <div>
            <h2 style={{ color }} >Hello {user}</h2>
        </div>
    )
}
export default Message;