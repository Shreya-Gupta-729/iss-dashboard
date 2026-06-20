"use client";
import {useState} from "react";
import {useRouter} from "next/navigation"
import { Orbitron } from "next/font/google";



const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function LoginPage()
{
    const [darkMode, setDarkMode] = useState(true);
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    return(
        <div className={
                    darkMode
                        ? "bg-slate-950 text-white min-h-screen"
                        : "bg-white text-[#06030f] min-h-screen"
                    }>

            <div id = "header" className="flex justify-between items-center px-5 pt-10 pb-10 bg-gradient-to-b from-blue-500/30 to transparent relative z-30">
                    <h1 className={`${orbitron.className} text-5xl font-bold`}> ISS Telemetry Dashboard 🌏</h1>
                        <button onClick={() => setDarkMode(!darkMode)} className={`${orbitron.className} border rounded-lg px-4 py-2 text-2xl transition delay-150 hover:bg-blue-500`}>
                         {darkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                    <a href="./login" className={`${orbitron.className} text-2xl border rounded-lg px-5 py-2 bg-black-500 transition delay-150 duration-300 ease-in-out  hover:bg-blue-500`}>Login</a>
            </div>
            

            <div className="min-w-full flex-1 flex justify-center-safe items-center py-10 relative z-50">
             <div className={darkMode ? `${orbitron.className} flex-col border rounded-xl  px-20 items-center w-1/3 grid-flow-cols bg-blue-500 text-[#06030f] shadow-xl`:`${orbitron.className} flex-col border rounded-xl  px-20 items-center w-1/3 grid-flow-cols bg-[#06030f] text-white` }>      
            <h1 className={`${orbitron.className} px-25 justify-center items-center py-10 font-bold text-2xl`}>LOGIN</h1>
            <form onSubmit={handleLogin}>
               
               <div className={`${orbitron.className} py-3 px-5`}>
                <label >Username</label>
                <input
                    type = "text"
                    value = {username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={darkMode ? "box-content p-2 border rounded transition delay-150 hover:bg-white/40 ":"box-content p-2 border rounded transition delay-150 hover:bg-blue-500/40"}/>
                </div>

                <div className={`${orbitron.className} py-3 px-5`}>  
                <label >Password</label>
                <input type = "password"
                       value = {password}
                       onChange={(e) => setPassword(e.target.value)}
                       className={darkMode ? "box-content p-2 border rounded transition delay-150 hover:bg-white/40":"box-content p-2 border rounded transition delay-150 hover:bg-blue-500/40"}/>
                </div>

                <div className="py-5 px-25">
                <button type = "submit" className={darkMode ? `${orbitron.className}box-content p-2 border rounded px-5 py-2 transition delay-150 hover:bg-[#06030f] hover:text-white hover:translate-y-1`:`${orbitron.className}box-content p-2 border rounded px-5 py-2 transition delay-150 hover:bg-blue-500 hover: text-white hover:translate-y-1` }>
                    Login
                </button>
                </div>


            </form>
            </div>
            </div> 
           <div id="stars" className="absolute inset-0 overflow-hidden z-0">
                {Array.from({ length: 50 }).map((_, index) => {
                 const size = Math.random() * 2 + 1;

                return (
                  <div
                         key={index}
                         className="absolute"
                         style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 80 + 20}px`, // longer tail
                            height: "2px",
                            background:
                                "linear-gradient(90deg, rgba(0,255,255,0), rgba(255, 251, 0, 0.32), rgb(255, 251, 0))",
                            transform: "rotate(45deg)",
                            animation: `shoot ${Math.random() * 3 + 2}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: 0,
                            filter: "blur(0.5px)",
                        }}
                    />
                  );
                 })}
            </div>
                <div id = "footer" className="pt-30 pb-10 pl-5 bg-gradient-to-b from-transparent to-blue-500/40">
                Telemetry Dashboard
                    <p className="flex-col">
                 Built using
                 Next.js
                 React
                 Tailwind CSS
                 Leaflet
                     </p>

                © 2026
    </div>
          
            </div>
        
    );

    function handleLogin(event)
    {  
        event.preventDefault();

        document.cookie = "token=dummy-JWT-cookie; path=/";

        router.push("/dashboard");
    }
}

