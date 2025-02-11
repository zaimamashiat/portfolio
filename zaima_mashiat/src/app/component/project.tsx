"use client";

export default function ProjectGrid() {
  const projects = [
    { title: "Fitness Matrix", link: "https://github.com/zaimamashiat/fitness_matrix", description: "A fitness tracking application.", image: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Kothay Khabo", link: "https://github.com/zaimamashiat/KothayKhabo", description: "A restaurant recommendation system.", image: "/kothay.png" },
    { title: "Medi Connect", link: "https://github.com/zaimamashiat/Final-MediConnect-Project-CSE370", description: "A healthcare service platform.", image: "https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Boss Club", link: "https://github.com/AhmedAwsaf/BossClub_IntraHacktive_T13", description: "A club management system.", image: "/boss.png" },
    { title: "DX-Ball", link: "https://github.com/AhmedAwsaf/CSE423-Project-DX_BALL", description: "A classic DX-Ball game project.", image: "/DXBall.png" }
  ];

  return (
    <div className="min-h-screen bg-[#FBF5E5] flex flex-col items-center justify-center p-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-8" style={{ fontFamily: 'Tisa, serif' }}>
        View my Projects!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="group relative block h-48 sm:h-56 lg:h-64">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full transform items-end border-2 border-black bg-[#C890A7] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-lg">
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 relative bg-black bg-opacity-50 rounded-lg w-full">
                <h2 className="mt-4 text-lg font-medium sm:text-xl text-white">{project.title}</h2>
              </div>

              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 bg-[#C890A7] rounded-lg w-full">
                <h3 className="mt-4 text-lg font-medium sm:text-xl text-white">{project.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-white">
                  {project.description}
                </p>
                <p className="mt-4 font-bold text-white">Read more</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}