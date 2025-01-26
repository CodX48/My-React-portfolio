import { _Header } from "./header"
import { Information_experians } from "./Myinfo"
import { ReposList } from "./myprojects"
function _Container(){
    return(
        <div className=" text-zinc-100 "> 
        <div class="relative h-screen w-full bg-slate-950 overflow-x-hidden">
        <div class="absolute bottom-[-5%] left-[-10%] top-[-5%] h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="w-[100%] flex justify-center">
        <div className="w-[70%] absolute p-[17px] px-10 pt-11">
        <_Header />
        <Information_experians />
        <ReposList />
        </div>
        </div>
        <div class="absolute bottom-[-5%] right-[-10%] top-[-5%] h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>

        
        
        </div>
    )
}

export {_Container}