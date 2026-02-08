import React from 'react';

const Dashboard = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-700">Active Tournaments</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">3</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h3 className="font-semibold text-green-700">Live Matches</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">1</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <h3 className="font-semibold text-purple-700">Total Players</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">128</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
