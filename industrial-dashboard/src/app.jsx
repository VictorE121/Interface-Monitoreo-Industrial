import { useEffect, useState } from "react";
import StatusCard from "./components/StatusCard";
import ProductionChart from "./components/ProductionChart";
import Alerts from "./components/Alerts";

export default function App(){
    const[status, setStatus] = useState("ACTIVA");
    const[data, setData] = useState([]);
    const[alerts, setAlerts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const value = Math.floor(Math.random() * 100);

            setData(prev =>[
                ...prev.slice(-10),
                {time: new Date().toLocaleTimeString(), value}
            ]);
            
            if(value > 85){
                setAlerts(prev => [
                    ...prev,
                    `Valor alto detectado: ${value}`
                ]);
            }

            const states = ["ACTIVA", "EN_PARO", "FALLO"];
            setStatus(states[Math.floor(Math.random() * states.length)]);    
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dashboard">
            <h1> Industrial Monitoring Dashboard</h1>
            
            <div className="grid">
                <StatusCard status={status}/>
                <ProductionChart data={data}/>
                <Alerts alerts={alerts}/>
            </div>

            <button onClick={() => setStatus("FALLO")}>Forzar Error</button>
            <button onClick={() => setStatus("ACTIVA")}>Activar Maquina</button>

        </div>
    );
}