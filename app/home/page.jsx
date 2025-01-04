import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import grad from "../../public/g.jpg";
function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            {/* Left Column - Text Content */}
            <div className="w-full md:w-1/2 px-4 animate-fade-in-left">
              <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight mb-6">
                Your Future Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Unlock your potential with personalized career guidance. Join
                thousands of students who found their dream path with us.
              </p>
              <div className="flex gap-6">
                <button className="transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl">
                  Explore Careers
                </button>
                <button className="transform hover:scale-105 transition-all duration-300 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50">
                  Take Assessment
                </button>
              </div>

              {/* Stats Section */}
              <div className="mt-12 flex gap-8">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-blue-600">
                    5000+
                  </span>
                  <span className="text-gray-600">Students Guided</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-purple-600">
                    95%
                  </span>
                  <span className="text-gray-600">Success Rate</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-full md:w-1/2 px-4 mt-12 md:mt-0 animate-fade-in-right">
              <div className="relative">
                <Image
                  src={grad}
                  alt="Career Guidance"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-50 animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
