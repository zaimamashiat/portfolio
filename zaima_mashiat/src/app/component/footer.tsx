"use client";

export default function Footer() {
  return (
    <footer className="bg-[#C890A7] text-[#212121] p-4 flex justify-between items-center w-full rounded-t-lg shadow-md mt-16">
      <div className="flex items-center space-x-2">
        <span className="text-lg">✨</span>
        <span className="font-semibold">Zaima Mashiat Nabi</span>
        <span className="text-[#FBF5E5]">© 2025 Zaima Mashiat Nabi</span>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-[#FBF5E5] hover:text-[#A35C7A] transition"><i className="fab fa-github"></i></a>
        <a href="#" className="text-[#FBF5E5] hover:text-[#A35C7A] transition"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="text-[#FBF5E5] hover:text-[#A35C7A] transition"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-[#FBF5E5] hover:text-[#A35C7A] transition"><i className="fab fa-facebook"></i></a>
      </div>
    </footer>
  );
}