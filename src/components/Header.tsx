import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Gateway Global Logo"
              width={140}
              height={47}
              className="object-contain w-28 h-auto sm:w-36 lg:w-44"
            />
          </div>
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6 items-center text-sm">
            <a href="#" className="text-blue-600 font-medium pb-1">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              Universities
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              Countries
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Success</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

