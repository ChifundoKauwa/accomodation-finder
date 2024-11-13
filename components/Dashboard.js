import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Logout
        </button>
      </header>
      
      <main className="mt-8 p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700">Welcome Back!</h2>
            <p className="mt-2 text-gray-500">Your last login was 2 hours ago.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700">Statistics</h2>
            <p className="mt-2 text-gray-500">Check your recent activity and stats.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>
            <p className="mt-2 text-gray-500">You have 3 new messages.</p>
          </div>
        </section>
        
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-md mt-4 p-6">
            <p className="text-gray-500">Here’s a summary of your recent activities...</p>
            {/* You can add more details or charts here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
