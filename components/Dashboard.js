import { useState } from 'react';

export default function Home() {
    const [dashboard, setDashboard] = useState([]); // State to hold the dashboard items
    const [location, setLocation] = useState(''); // State to hold the input value
    const [image, setImage] = useState(null); // State to hold the uploaded image

    const addDashboard = () => {
        if (location && image) {
            const date = new Date().toLocaleString(); // Get the current date and time
            const newItem = { location, date, image }; // Create a new item with location, date, and image
            setDashboard([...dashboard, newItem]); // Add new item to the dashboard
            setLocation(''); // Clear the input field
            setImage(null); // Clear the image state
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
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} // Update image state on file selection
            />
            <button onClick={addDashboard}>Add</button> {/* Call addDashboard on button click */}
            <div className="js-dashboard">
                {dashboard.map((item, index) => (
                    <div key={index}>
                        {item.image && <img src={item.image} alt={`Location ${item.location}`} style={{ width: '100px', height: '100px' }} />} {/* Display the image */}
                        <p>
                            {item.location} - Added on: {item.date}
                            <button onClick={() => deleteLocation(index)}>Delete</button>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}