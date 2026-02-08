import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const MainLayout = () => {
    const location = useLocation();

    const navigation = [
        { name: 'Dashboard', href: '/' },
        { name: 'Tournaments', href: '/tournaments' },
        { name: 'Teams', href: '/teams' },
        { name: 'Players', href: '/players' },
        { name: 'Live Scoring', href: '/scoring' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
                <div className="p-4 border-b border-slate-700">
                    <h1 className="text-xl font-bold">Cricket Admin</h1>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`block px-4 py-2 rounded-md transition-colors ${location.pathname === item.href
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:bg-slate-800'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-slate-700 text-sm text-gray-400">
                    v1.0.0
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Mobile Header */}
                <header className="bg-white shadow-sm p-4 md:hidden flex justify-between items-center">
                    <h1 className="font-bold text-lg">Cricket Tournament System</h1>
                    {/* Mobile menu button could go here */}
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
