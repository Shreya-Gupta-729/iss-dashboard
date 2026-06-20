"use client";
import { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../../lib/api";
import { useRouter } from "next/navigation";
import { Orbitron } from "next/font/google";
import dynamic from "next/dynamic";


const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function ISSDashboard()
{
    const router = useRouter();
    const [history, setHistory] = useState([]);
    const [page, setPage] = useState(1);
    const [darkMode, setDarkMode] = useState(true);

    const recordsPerPage = 10;
    const startIndex = (page - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;

    const visibleData = history.slice(startIndex, endIndex);

    const ISSMap = dynamic(()=>import("./ISSmap"),
            {
                ssr: false,
            });

    const currentPosition = history.length > 0 ? [history[0].latitude, history[0].longitude] : [0,0];

    const pathCoordinates = history.map(record => 
    [
        record.latitude,
        record.longitude,
    ]);

    useEffect(() => 
    {
        async function getISSData()
        {
            const data = await fetchData();
            const record = {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        altitude: data.altitude,
                        velocity: data.velocity,
                        timestamp: new Date().toLocaleTimeString(),
                    };
           
            console.log(data);

            setHistory((prev) => [record,...prev,].slice(0, 100));
        }
        getISSData();

        const interval = setInterval(
            getISSData,
            10000,
        );

        return() => {
            clearInterval(interval);
        }

    },[]);

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
                    <button onClick={handleLogout} className={`${orbitron.className} text-2xl border rounded-lg px-5 py-2 bg-black-500 transition delay-150 duration-300 ease-in-out  hover:bg-blue-500`}>Logout </button>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 h-[80vh]">
        
       
         <div id = "table" className="col-span-1 h-full flex flex-col overflow-hidden">   
            <div className="flex-1 overflow-y-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr>
                        <th className="text-left p-2 border-b border-[#d0d0d0]">Time</th>
                        <th className="text-left p-2 border-b border-[#d0d0d0]">Latitude</th>
                        <th className="text-left p-2 border-b border-[#d0d0d0]">Longitude</th>
                        <th className="text-left p-2 border-b border-[#d0d0d0]">Altitude (km)</th>
                        <th className="text-left p-2 border-b border-[#d0d0d0]">Velocity (km/hr)</th>
                    </tr>
                </thead>
                <tbody>
                    {visibleData.map((record, index) => (
                        <tr key={index}>
                            <td className="p-2 text-xs border-b border-[#e0e0e0]">{record.timestamp}</td>

                            <td className="p-2 border-b border-[#e0e0e0]">
                                {record.latitude.toFixed(2)}
                            </td>

                            <td className="p-2 border-b border-[#e0e0e0]">
                                {record.longitude.toFixed(2)}
                            </td>

                            <td className="p-2 border-b border-[#e0e0e0]">
                                {record.altitude.toFixed(2)}
                            </td>

                            <td className="p-2 border-b border-[#e0e0e0]">
                                {record.velocity.toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
         <div className="flex justify-between mt-4">

            <button className={`${orbitron.className} text-sm`} onClick={() => setPage((p) => Math.max(p - 1, 1))}>
             ← Previous
            </button>
                    <span className={`${orbitron.className} text-sm`}>Page {page}</span>
            <button className={`${orbitron.className} text-sm`} onClick={() =>
                    setPage((p) =>
                        p * 10 < history.length ? p + 1 : p
                    )}>
             Next →
            </button>

        </div>
        </div>
        <div id="map" className="md:col-span-2 rounded-2xl border p-4">
            <h1 className={`${orbitron.className} font-bold pb-5`}>records: {history.length} </h1>
            {history.length > 0 && 
            (
                <ISSMap
                    currentPosition={currentPosition}
                    pathCoordinates={pathCoordinates}
                />
            )}
         </div>
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

    function handleLogout()
    {
        setHistory([]);
        document.cookie = "token=; expires=Thu, 1 Jan 1970 00:00:00 UTC; path=/";

        router.push("/login");
    }
}