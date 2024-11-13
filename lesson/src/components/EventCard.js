

function EventCard(props) {
    return (
        <div className="event-card">
            <h1 className="event-card-title">{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.location}</p>
        </div>
    )
    
}

export default EventCard;