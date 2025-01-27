const API = 'https://api.github.com/users/CodX48/repos';
import { useState,useEffect } from "react";


function ReposList() {

    const [Repos,SetRepos] = useState([]);
    const [languages,SetLanguages] = useState({});
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
        return ( <div><p>Something Wrong happend!!</p></div>);
    }

    const FilterdRepos = Repos.filter(R => R.description && R.description.includes(" front-end "));

    return(
        <div className="flex flex-col justify-center items-center mt-20 lg:w-full ">
        
        <ul className="flex flex-col justify-center items-center gap-5 h-fit w-[100%] bg-zinc-950/50 lg:px-32 py-20 ring-1 ring-pink-500/20 shadow-lg rounded-md md:px-10 sm:px-10 max-sm:px-10 ">
          {FilterdRepos.map((Repos) => (
            <li
              key={Repos.id}
              className="w-[100%] p-2"
              >
              <div className="w-[100%] h-full lg:flex lg:flex-row lg:justify-between lg:items-center gap-5 md:flex-col md:items-start md:justify-center sm:block max-sm:block">
                <a
                  className="min-w-40 text-1xl font-semibold text-zinc-50 hover:text-violet-600 transition-all duration-300 " 
                  href={Repos.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {(Repos.name).toUpperCase()}
                </a>
                <div className="max-sm:mt-3">
                <p className="w-80 mb-2 lg:block sm:max-w-[90%] max-sm:max-w-[90%] sm:text-lg">{Repos.description}</p>
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
