const API = 'https://api.github.com/users/CodX48/repos';
import { useState,useEffect } from "react";


function ReposList() {

    const [Repos,SetRepos] = useState([]);
    const [error,SetError] = useState(null);
    
    useEffect(()=>{

        const FetchData = async (api) =>{
            try{
                const response = await fetch(api);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const Data = await response.json();
                SetRepos(Data)

            }catch(E){
                SetError(E);
            }
        }

        
        FetchData(API)
    },[])


    if(error){
        return ( <div className="w-full flex justify-center mt-20 text-5xl text-zinc-500"><p>Faild To Fetch Projects!!</p></div>);
    }

    const FilterdRepos = Repos.filter(R => R.description && R.description.includes(" front-end "));

    function styleAnimation(time){
      return({"--my-bounce":`bounce ${time}s infinite alternate`})
    }
    return(
        <div className="flex flex-col justify-center items-center mt-20 lg:w-full ">
        <ul className="flex relative flex-col justify-between items-center gap-5 w-[90%] bg-zinc-950/50 lg:px-20 py-20 ring-1 ring-pink-500/20 shadow-lg rounded-md md:px-10 sm:px-10 max-sm:px-10 min-h-[400px] overflow-hidden">
        <div className="absolute -left-[30%] -top-5 -rotate-12  w-[900px] h-[300px] bg-sky-700 rounded-full blur-3xl"></div>
        <div className="z-20 absolute  animate-[--my-bounce] duration-1000 bg-sky-700/60 -rotate-45 right-[15%] w-[130px] h-[150px] top-[10%] rounded-full blur-2xl" style={styleAnimation(4)}></div>
        <div className=" absolute animate-[--my-bounce] duration-1000 bg-pink-900/50 -rotate-45 right-[15%] w-[100px] h-[100px] top-[10%] rounded-full blur-3xl" style={styleAnimation(10)}></div>
        <div className="z-30 absolute animate-[--my-bounce] duration-1000 bg-pink-900 -rotate-90 right-[12%] w-[130px] h-[150px] top-[10%] rounded-full blur-2xl" style={styleAnimation(8)}></div>
        <div className="absolute -right-[20%] -bottom-10 rotate-12 w-[900px] h-[350px] bg-pink-950 rounded-full blur-3xl"></div>
                
          {FilterdRepos.map((Repos) => (
            <li
              key={Repos.id}
              className="w-[100%] p-2 z-50"
              >
              <div className="w-[100%] h-full lg:flex lg:flex-row lg:justify-between lg:items-center gap-5 md:flex-col md:items-start md:justify-center sm:block max-sm:block">
                <a
                  className="min-w-40 text-1xl font-semibold text-zinc-50 hover:text-pink-500 transition-all duration-300 " 
                  href={Repos.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {(Repos.name).toUpperCase()}
                </a>
                <div className="max-sm:mt-3  p-1 w-[50%]">
                <p className="w-full mb-2 lg:block sm:max-w-[60%] max-sm:max-w-[75%] sm:text-lg ">{Repos.description}</p>
                <span className="bg-violet-400/5 ring-1 ring-violet-600/80 py-1 px-2 rounded-md text-pink-100 text-[13px]">{Repos.language}</span>
                </div>
                </div>
            </li>
          ))}
        </ul>
      </div>
      
        
    )

}

export {ReposList}
