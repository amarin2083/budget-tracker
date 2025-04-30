import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FinancialReportsPage = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('/api/reports');
                setReports(response.data);
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };

        fetchReports();
    }, []);

    return (
        <div className="financial-reports">
            <h1>Financial Reports</h1>
            {reports.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={index}>
                                <td>{report.date}</td>
                                <td>{report.description}</td>
                                <td>{report.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No reports available.</p>
            )}
        </div>
    );
};

export default FinancialReportsPage;