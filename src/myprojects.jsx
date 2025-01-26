const API = 'https://api.github.com/users/CodX48/repos';
import { useState,useEffect } from "react";


function ReposList() {

    const [Repos,SetRepos] = useState([]);
    //const [languages,SetLanguages] = useState({});
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

        
        FetchData(API);
    },[])


    if(error){
        return ( <div><p>Something Wrong happend!!</p></div>);
    }

    const FilterdRepos = Repos.filter(R => R.description && R.description.includes(" front-end "));

    return(
        <div className="flex flex-col justify-center items-center mt-20">
        
        <ul className="flex flex-col justify-center items-center gap-5 h-fit w-[100%] bg-zinc-950/50 px-32 py-20 ring-1 ring-pink-500/20 shadow-lg rounded-md">
          {FilterdRepos.map((Repos) => (
            <li
              key={Repos.id}
              className="w-[100%] p-2"
              >
              <div className="w-[100%] h-full  flex justify-between items-center gap-5">
                <a
                  className=" text-1xl font-semibold text-zinc-50 hover:text-pink-500 transition-all duration-300" 
                  href={Repos.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {(Repos.name).toUpperCase()}
                </a>
                <div>
                <p className="w-80">{Repos.description}</p>
                <span>{Repos.language}</span>
                </div>
                </div>
            </li>
          ))}
        </ul>
      </div>
      
        
    )

}

export {ReposList}
