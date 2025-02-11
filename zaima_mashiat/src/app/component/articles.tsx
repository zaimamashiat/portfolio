"use client";
export default function Articles() {
    const articles = [
      { title: "Coming Soon!", description: "Description"  },
      { title: "Coming Soon!", description: "Description " },
    ];
  
    return (
      <div className="min-h-screen  flex flex-col items-center justify-center p-18 mt-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-4" style={{ fontFamily: 'Tisa, serif' }}>
          View my Articles!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-6xl w-full">

          {articles.map((article, index) => (
            <a key={index} href="#" className="group relative block h-48 sm:h-56 lg:h-64">
              <span className="absolute inset-0 border-2 border-dashed border-black"></span>
  
              <div className="relative flex h-full transform items-end border-2 border-black bg-[#C890A7] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-lg">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <h2 className="mt-4 text-lg font-medium sm:text-xl text-white">{article.title}</h2>
                </div>
  
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-lg font-medium sm:text-xl text-white">{article.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-white">
                    {article.description}
                  </p>
                  <p className="mt-4 font-bold text-white">Read more</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-[#A35C7A] text-white font-semibold rounded-lg flex items-center hover:bg-[#913f61] transition">
          View More <span className="ml-2">➡️</span>
        </button>
      </div>
    );
  }
