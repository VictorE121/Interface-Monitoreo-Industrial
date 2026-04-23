export default function StatusCard({ status }){
    const styles = {
        ACTIVA: "#22c55e",
        EN_PARO: "#f59e0b",
        FALLO: "#ef4444"
    };

    return(
        <div className="card">
            <h2>Estado de Maquinas</h2>
            <div style={{
                marginTop: 10,
                padding: 20,
                textAlign: "center",
                fontSize: 24,
                fontWeight: "bold",
                color: styles[status],
                border: `2px solid ${styles[status]}`,
                borderRadius: 8
            }}>
                {status}
            </div>
        </div>
    );
}