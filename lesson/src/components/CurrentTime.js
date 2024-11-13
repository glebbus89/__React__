function CurrentTime() {
    const currentTime = new Date();
    return (
        <div>
            <h1> "Текущее время: {currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}" </h1>
            <h2>Текущее дата: {currentTime.toLocaleDateString("ru-RU")}</h2>
        </div>
    )
}
export default CurrentTime;