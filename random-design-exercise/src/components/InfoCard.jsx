export default function InfoCard(props) {
    return (
        <div className="info-card">
            <div className="info-number">{props.number}</div>
            <p className="info-p">{props.text}</p>
        </div>
    )
}