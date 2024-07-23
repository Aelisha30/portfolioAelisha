
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
    <div className="flex items-center w-full h-full bg-cover bg-center justify-between" style={{backgroundImage: "url(/final.jpg"}}>
   
    <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
      <h1 className="text-[50px] text-white font-semibold">
        Ingeniously engineering immersive
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-orange-600 ">
          <br></br>
          web experiences
          </span>
      </h1>
      <p className="text-gray-200 hidden md:block tracking-tighter">
        Hello, I'm Aelisha a full stack developer dedicated to crafting seamless digital experiences.With a focus on innovation and meticulous attention to detail, I engineer intuitive and efficient web applications, transforming visionary concepts into refined, user-centric solutions."
      </p>
      <div className="flex-col md:flex-row hidden md:flex gap-5">
        <Link href="/my-skills" className="rounded-[20px] group relative bg-blue-800 hover:bg-blue-700 tracking-tight font-light px-5 py-3 text-lg text-white max-w-[200px]">
        Learn More
        </Link>
        <Link href="/my-projects" className="rounded-[20px] group relative bg-transparent tracking-tight font-light px-5 border border-white py-3 text-lg text-white max-w-[200px]">
        <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"></div>
        My Projects
        </Link>
        <Link href="/contact-me" className="rounded-[20px] group relative bg-transparent tracking-tight font-light px-5 border border-white py-3 text-lg text-white max-w-[200px]">
        <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"></div>
        Contact Me
        </Link>
      </div>
    </div>
    
    <div className="w-48 h-48 rounded-full overflow-hidden m-40"><img src="./profile1.jpg" className="w-full h-full object-cover"/></div>
    </div>
    <div className="absolute bottom-10 z-[20] right-5 flex-col md:hidden ">
        <Link href="/my-skills" className="rounded-[20px] group bg-blue-800 hover:bg-blue-700 tracking-tight font-light px-5 py-3 text-lg text-white max-w-[200px]">
        Learn More
        </Link>
        <Link href="/my-projects" className="rounded-[20px] group bg-blue-800 hover:bg-blue-700 tracking-tight font-light px-5 border border-white py-3 text-lg text-white max-w-[200px]">
        My Projects
        </Link>
        <Link href="/contact-me" className="rounded-[20px] group bg-blue-800 hover:bg-blue-700 tracking-tight font-light px-5 border border-white py-3 text-lg text-white max-w-[200px]">
        Contact Me
        </Link>
      </div>
    </main>
  )
}
