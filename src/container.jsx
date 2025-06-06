import { _Header } from "./header"
import { Information_experians } from "./Myinfo"
import { ReposList } from "./myprojects"
import { MoreAboutMe } from "./About"
import { ContactInfo } from "./contact"


function _Container(){
    return(
        <div className=" text-zinc-100"> 
        <div className="relative h-screen w-full bg-slate-100 overflow-x-hidden dark:bg-slate-950">
        <div className="absolute bottom-[-5%] left-[-10%] top-[-5%] h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="w-[100%] flex justify-center">
        <div className="lg:w-[65%] md:w-[75%] sm:w-[100%] max-sm:w-[100%] absolute p-[17px] lg:px-10 md:px-7 sm:px-5 max-sm:px-5 pt-11">
        <_Header />
        <Information_experians />
        <ReposList />
        <MoreAboutMe />
        <ContactInfo />
        </div>
        </div>
        <div className="absolute bottom-[-5%] right-[-10%] top-[-5%] h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>

        
        
        </div>
    )
}

export {_Container}