"use client";

export default function About() {
  return (
    <section id="about" className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center">About Us</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Welcome to <span className="text-blue-600 font-semibold">Accommodation Finder</span>, 
          your trusted partner in discovering the best places to stay. Whether you're planning 
          a business trip, a family vacation, or a weekend getaway, our mission is to connect 
          you with accommodations that meet your preferences and budget.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="/public/cheap.jpg"
              alt="About-us"
              className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
            />
          </div>

          {/* Content Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Why Choose Us?
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.707-4.707a1 1 0 011.414-1.414l3.293 3.293 7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Wide variety of accommodations to suit every need and budget.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.707-4.707a1 1 0 011.414-1.414l3.293 3.293 7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                User-friendly platform for seamless searching and booking.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.707-4.707a1 1 0 011.414-1.414l3.293 3.293 7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Transparent pricing with no hidden fees.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.707-4.707a1 1 0 011.414-1.414l3.293 3.293 7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                24/7 customer support to address all your queries.
              </li>
            </ul>
            <p className="mt-6 text-gray-600">
              Experience the ease of finding your perfect stay with 
              <span className="text-blue-600 font-semibold"> Accommodation Finder</span>. 
              Let us help you create unforgettable memories, one booking at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
