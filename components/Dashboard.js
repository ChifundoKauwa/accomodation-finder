import { useState } from 'react';

export default function Home() {
    const [dashboard, setDashboard] = useState([]); // State to hold the dashboard items
    const [location, setLocation] = useState(''); // State to hold the input value

    const addDashboard = () => {
        if (location) {
            const date = new Date().toLocaleString(); // Get the current date and time
            setDashboard([...dashboard, { location, date }]); // Add new location to the dashboard
            setLocation(''); // Clear the input field
        }
    };

    const deleteLocation = (index) => {
        const newDashboard = dashboard.filter((_, i) => i !== index); // Remove the item at the specified index
        setDashboard(newDashboard); // Update the dashboard state
    };

    return (
        <div>
            <h1>FIND YOUR ACCOMMODATION</h1>
            <p>VISIT US</p>
            <input
                placeholder="House location"
                value={location}
                onChange={(e) => setLocation(e.target.value)} // Update location state on input change
            />
            <button onClick={addDashboard}>Add</button> {/* Call addDashboard on button click */}
            <div className="js-dashboard">
                {dashboard.map((item, index) => (
                    <p key={index}>
                        {item.location} - Added on: {item.date} 
                        <button onClick={() => deleteLocation(index)}>Delete</button>
                    </p>
                ))}
            </div>
        </div>
    );
}