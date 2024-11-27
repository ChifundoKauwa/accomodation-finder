"use client"; // This makes the entire component a client component

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

// Mock data for hostels
const hostelsData = [
  { id: 1, name: 'Protea Hotel', location: 'Blantyre', price: 125000, image: '/hotel1.jpg', description: 'Excellent facilities with two bed shared and food included for first day.' },
  { id: 2, name: 'Amaryllis Hotel', location: 'Blantyre', price: 150000, image: '/hotel2.jpg', description: 'Beautiful views and modern with two beds. Free cancellation included.' },
  { id: 3, name: 'Cedar Place', location: 'Lilongwe', price: 85000, image: '/hotel3.jpg', description: 'Ideal for budget travelers. Free breakfast and no prepayment.' },
  { id: 4, name: 'Sunbird Capital', location: 'Lilongwe', price: 130000, image: '/hotel4.jpg', description: 'Luxury stay with spacious rooms and all amenities.' },
  { id: 5, name: 'Lodge Victoria', location: 'Mzuzu', price: 75000, image: '/hotel5.jpg', description: 'Comfortable and affordable, perfect for business travelers.' },
  { id: 6, name: 'Blantyre Lodge', location: 'Blantyre', price: 90000, image: '/hotel6.jpg', description: 'Modern interiors with a relaxing environment.' },
  { id: 7, name: 'Warm Heart Hotel', location: 'Lilongwe', price: 110000, image: '/hotel7.jpg', description: 'Popular choice for comfort and quality service.' },
  { id: 8, name: 'Green Inn', location: 'Zomba', price: 68000, image: '/hotel8.jpg', description: 'Budget-friendly with all essential amenities.' },
  { id: 9, name: 'Mountain View', location: 'Blantyre', price: 105000, image: '/hotel9.jpg', description: 'Beautiful mountain view with premium services.' },
  { id: 10, name: 'Lake Shore Lodge', location: 'Zomba', price: 95000, image: '/hotel10.jpg', description: 'Ideal for a quiet getaway by the lake.' },
  { id: 11, name: 'Riverside Inn', location: 'zomba', price: 200000, image: '/hotel11.jpg', description: 'Affordable stay with scenic river views.' },
  { id: 12, name: 'Hilltop Suites', location: 'Blantyre', price: 115000, image: '/hotel12.jpg', description: 'Elegant rooms and convenient location.' }
];

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [locationFilter, setLocationFilter] = useState(searchParams.get("location") || "");
  const [filteredHostels, setFilteredHostels] = useState(hostelsData);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state

  useEffect(() => {
    const filtered = hostelsData.filter((hostel) =>
      hostel.location.toLowerCase().includes(locationFilter.toLowerCase())
    );
    setFilteredHostels(filtered);
  }, [locationFilter]);

  const handleSearch = () => {
    router.push(`/?location=${locationFilter}`);
  };

  const handleBookingClick = () => {
    if (isLoggedIn) {
      router.push("/components/Message");
    } else {
      router.push("/components/LoginForm");
    }
  };

  const handleListPropertyClick = () => {
    if (isLoggedIn) {
      router.push("/components/Dashboard");
    } else {
      router.push("/components/LoginForm");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-200 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/student.png" alt="Accommodation Finder Logo" width={100} height={50} className="object-contain" />
            <h1 className="text-2xl font-bold text-blue-600">Accommodation Finder</h1>
          </div>
          <nav className="flex space-x-6 items-center">
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#hotels" className="text-gray-700 hover:text-blue-600">Looking for stay</a>
            <a onClick={handleListPropertyClick} className="text-gray-700 hover:text-blue-600 cursor-pointer">
              List your property
            </a>
            <button onClick={() => router.push("/components/LoginForm")} className="text-gray-700 hover:text-blue-600 flex items-center">
              <span className="material-icons mr-1"></span> Log In
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        {/* Section with background image */}
        <section
          className="relative my-8 text-center bg-cover bg-center bg-no-repeat h-[400px]"
          style={{
            backgroundImage: 'url("/malawi.jpg")',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl font-semibold text-white">Find Your Perfect Stay</h2>
            <p className="mt-2 text-gray-600">
              Discover the best accommodations in your desired location.
            </p>
            <div className="mt-6 flex justify-center">
              <input
                type="text"
                placeholder="Enter location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="border border-gray-300 rounded-l-md px-4 py-2 w-72 focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
              >
                Search
              </button>
            </div>
          </div>
        </section>

        <section id="hotels" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredHostels.map((hostel) => (
            <div key={hostel.id} className="bg-white shadow-md rounded-md overflow-hidden">
              <Image src={hostel.image} alt={hostel.name} width={400} height={250} className="w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{hostel.name}</h3>
                <p className="mt-2 text-gray-600">MWK {hostel.price.toLocaleString()} / Month</p>
                <p className="text-gray-500 mt-1">{hostel.description}</p>
                <button
                  onClick={handleBookingClick}
                  className="mt-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Booking
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-blue-200 py-8 mt-8">
  <div className="container mx-auto text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
      <div>
      <h3 className="mt-4 text-lg font-semibold">Contact Us</h3>
        <p className="mt-2 text-gray-500">
          Have questions? Reach out to us at <a href="mailto:support@accommodationfinder.com" className="text-blue-600 hover:underline">support@accommodationfinder.com</a>.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Quick Access</h3>
        <ul className="mt-2 space-y-2">
          <li><a href="/sign up" className="hover:text-blue-600">Register</a></li>
          <li><a href="/login" className="hover:text-blue-600">Log In</a></li>
          <li><a href="/dashboard" className="hover:text-blue-600">Dashboard</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Who We Are</h3>
        <p className="mt-2 text-gray-500">
          We are a dedicated team focused on simplifying the accommodation search experience by connecting you to the best hostels and lodges across Malawi.
        </p>
      </div>
    </div>
    <p className="mt-6 text-gray-600">© 2024 Accommodation Finder. All rights reserved.</p>
  </div>
</footer>
 </div>
);
}
