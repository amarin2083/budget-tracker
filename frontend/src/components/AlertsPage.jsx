import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlertsPage = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const response = await axios.get('/api/alerts');
                setAlerts(response.data);
            } catch (error) {
                console.error('Error fetching alerts:', error);
            }
        };

        fetchAlerts();
    }, []);

    return (
        <div className="alerts-page">
            <h1>Alerts</h1>
            {alerts.length === 0 ? (
                <p>No alerts at this time.</p>
            ) : (
                <ul>
                    {alerts.map((alert, index) => (
                        <li key={index}>
                            <strong>{alert.title}</strong>: {alert.message}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AlertsPage;