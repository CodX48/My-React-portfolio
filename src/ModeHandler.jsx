import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import { useEffect, useState } from "react";



function DarkMode(){
    const [darkmode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
      );
    
      useEffect(() => {
        if (darkmode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", true);
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", false);
        }
      }, [darkmode]);
    return(
        <button onClick={()=>{setDarkMode(!darkmode)}}>
            <i className="p-2 text-zinc-900 text-2xl rounded-2xl dark:text-zinc-100">{darkmode ?   <MdLightMode/> :<MdModeNight/> }</i>
        </button>
         )
}

export {DarkMode}