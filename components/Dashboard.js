import { useState } from 'react';

export default function Home() {
    const [dashboard, setDashboard] = useState([]); // State to hold the dashboard items
    const [location, setLocation] = useState(''); // State to hold the input value
    const [image, setImage] = useState(null); // State to hold the image file
    const [price, setPrice] = useState(''); // State to hold the price input

    const addDashboard = () => {
        if (location && image && price) {
            const date = new Date().toLocaleString(); // Get the current date and time
            const newItem = { location, date, image: URL.createObjectURL(image), price }; // Create new item with image URL and price
            setDashboard([...dashboard, newItem]); // Add new location to the dashboard
            setLocation(''); // Clear the input field
            setImage(null); // Clear the image file
            setPrice(''); // Clear the price input
        }
    };

    const deleteLocation = (index) => {
        const newDashboard = dashboard.filter((_, i) => i !== index); // Remove the item at the specified index
        setDashboard(newDashboard); // Update the dashboard state
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-blue-100">{/* add blue background color*/}
            <h1 className="text-2xl font-bold text-center mb-4">FIND YOUR ACCOMMODATION</h1>
            <p className="text-center mb-6">VISIT US</p>
            <div className="flex mb-4">
                <input
                    className="flex-grow border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="House location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} // Update location state on input change
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} // Update price state on input change
                    className="ml-2 border border-gray-300 rounded-md p-2"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])} // Update image state on file selection
                    className="ml-2 border border-gray-300 rounded-md p-2"
                />
                <button 
                    className="bg-blue-500 text-white rounded-r-md px-4 hover:bg-blue-600"
                    onClick={addDashboard} // Call addDashboard on button click
                >
                    Add
                </button>
            </div>
            <div className="js-dashboard space-y-2">
                {dashboard.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                        <div className="flex items-center">
                            {item.image && (
                                <img src={item.image} alt="Location" className="w-16 h-16 object-cover rounded-md mr-2" />
                            )}
                            <p className="text-gray-700">
                                {item.location} - Price: ${item.price} - Added on: {item.date}
                            </p>
                        </div>
                        <button 
                            className="text-red-500 hover:text-red-700"
                            onClick={() => deleteLocation(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
} 