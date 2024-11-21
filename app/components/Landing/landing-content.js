"use client"; // This makes the entire component a client component

import { useRouter, useSearchParams, } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {Suspense} from 'react'



// Mock data for hostels
const hostelsData = [
  { id: 1, name: 'Protea Hotel', location: 'Blantyre', price: 125000, image: '/hotel1.jpg', description: 'Excellent facilities with free cancellation and breakfast included.' },
  { id: 2, name: 'Amaryllis Hotel', location: 'Blantyre', price: 150000, image: '/hotel2.jpg', description: 'Beautiful views and modern amenities. Free cancellation included.' },
  { id: 3, name: 'Cedar Hostel', location: 'Lilongwe', price: 85000, image: '/hotel3.jpg', description: 'Ideal for budget travelers. Free breakfast and no prepayment.' },
  { id: 4, name: 'Sunbird Hostel', location: 'Lilongwe', price: 130000, image: '/hotel4.jpg', description: 'Luxury stay with spacious rooms and all amenities.' },
  { id: 5, name: 'Lodge Hostel', location: 'Mzuzu', price: 75000, image: '/hotel5.jpg', description: 'Comfortable and affordable, perfect for business travelers.' },
  { id: 6, name: 'Blantyre Hostel', location: 'Blantyre', price: 90000, image: '/hotel6.jpg', description: 'Modern interiors with a relaxing environment.' },
  { id: 7, name: 'Warm Heart Hotel', location: 'Lilongwe', price: 110000, image: '/hotel7.jpg', description: 'Popular choice for comfort and quality service.' },
  { id: 8, name: 'Green Hostel', location: 'Mzuzu', price: 68000, image: '/hotel8.jpg', description: 'Budget-friendly with all essential amenities.' },
  { id: 9, name: 'Mountain Hostel', location: 'Blantyre', price: 105000, image: '/hotel9.jpg', description: 'Beautiful mountain view with premium services.' },
  { id: 10, name: 'Lake Shore Hostel', location: 'Mangochi', price: 95000, image: '/hotel10.jpg', description: 'Ideal for a quiet getaway by the lake.' },
  { id: 11, name: 'Riverside Hostel', location: 'Mangochi', price: 87000, image: '/hotel11.jpg', description: 'Affordable stay with scenic river views.' },
  { id: 12, name: 'Hilltop Hostel', location: 'Zomba', price: 115000, image: '/hotel12.jpg', description: 'Elegant rooms and convenient location.' }
];


export default function Landing() {
  
  const router = useRouter();
  const searchParams =useSearchParams(); 
  const [locationFilter, setLocationFilter] = useState(searchParams.get('location') || '');
  const [filteredHostels, setFilteredHostels] = useState(hostelsData);

  useEffect(() => {
    // Filter the hostels based on the location query parameter
    const filtered = hostelsData.filter(hostel =>
      hostel.location.toLowerCase().includes(locationFilter.toLowerCase())
    );
    setFilteredHostels(filtered);
  }, [locationFilter]);

  const handleSearch = () => {
    // Update the query parameter in the URL
    router.push(`/?location=${locationFilter}`);
  };


  return (
    
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Accommodation Finder</h1>
          <nav className="space-x-4">
            <a href="#hotels" className="text-gray-700 hover:text-blue-600">Hotels</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <h2 className="text-4xl font-semibold text-gray-800">Find Your Perfect Stay</h2>
          <p className="mt-2 text-gray-600">Discover the best accommodations in your desired location.</p>

          <div className="mt-6 flex justify-center">
            <input
              type="text"
              placeholder="Enter location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="border border-gray-300 rounded-l-md px-4 py-2 w-72 focus:outline-none"
            />
            
            <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">Search</button>
          
          </div>
        </section>

        <section id="hotels" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredHostels.map(hostel => (
            <div key={hostel.id} className="bg-white shadow-md rounded-md overflow-hidden">
              <Image src={hostel.image} alt={hostel.name} width={400} height={250} className="w-full object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{hostel.name}</h3>
                <p className="mt-2 text-gray-600">MWK {hostel.price.toLocaleString()} / Month</p>
                <p className="text-gray-500 mt-1">{hostel.description}</p>
                <Link href={'/components/SignUpForm'}>
            
                <button className="mt-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"  >Booking</button>
                </Link>
            
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-gray-100 py-8 mt-8">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold">Explore</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#hotels" className="hover:text-blue-600">Hotels</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Who We Are</h3>
              <p className="mt-2 text-gray-500">
                We are a dedicated team focused on simplifying the accommodation search experience. By partnering with trusted providers, we offer a curated selection of quality stays, ensuring that travelers can find the perfect match for their preferences and budget.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Benefits of Using Our Platform</h3>
              <ul className="mt-2 space-y-2">
                <li>Wide variety of options</li>
                <li>Easy and secure booking</li>
                <li>Competitive prices</li>
                <li>24/7 customer support</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-gray-600">© 2024 Accommodation Finder. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  );
}
