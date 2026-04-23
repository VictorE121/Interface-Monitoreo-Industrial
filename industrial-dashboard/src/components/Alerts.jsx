export default function Alerts({ alerts }) {
    return(
        <div>
            <h3>Alertas</h3>
            <ul>
                {alerts.slice(-5).map((alert, index) => (
                    <li key={index}>{alert}</li>
                ))}
            </ul>
        </div>
    );
}