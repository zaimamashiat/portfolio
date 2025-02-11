"use client";
export default function PortfolioCard() {
    return (
      <div className=" text-black p-4 flex flex-col items-center mt-64">
        <div className="flex flex-col md:flex-row items-center bg-[#C890A7] p-6 rounded-2xl shadow-lg max-w-4xl w-full">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-[#212121]">Hello, I'm <span className="text-white">Zaima.</span></h1>
            <p className="mt-2 text-[#A35C7A]">A CS student from Bangladesh.</p>
            <h2 className="mt-4 font-semibold text-[#212121]">I'm quite skilled at:</h2>
            <ul className="mt-2 text-[#FBF5E5] list-disc list-inside">
              <li>Frontend Development</li>
              <li>Android Development</li>
              <li>Model Training</li>
              <li>Data Entry</li>
              <li>and more!</li>
            </ul>
            <div className="mt-4 flex items-center space-x-4">
              <button className="bg-[#A35C7A] px-4 py-2 rounded-full text-white font-semibold flex items-center">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-[#A35C7A] px-4 py-2 rounded-full text-white font-semibold flex items-center">
                <span className="mr-2">📄</span> View My Resume
              </a>

                {/* <span className="mr-2">📄</span> View My Resume */}
              </button>
            </div>
          </div>
          {/* Avatar Section */}
          <div className="relative mt-4 md:mt-0 md:ml-4">
            <div className="w-40 h-40 md:w-56 md:h-56 bg-[#212121] rounded-full overflow-hidden shadow-lg">
              <img
                src="/portfolio.jpg"
                alt="Zaima"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Ensure no excessive bottom margin */}
        <div className="mt-4 w-full max-w-6xl">
          
        </div>
      </div>
    );
  }
