import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

const [Linked,Upwork,Github] = ["","https://www.upwork.com/freelancers/~01984c0a71ff9e2d88","https://github.com/CodX48"]

function _Header(){
    return(
        <div className="flex justify-between items-center px-2">
            <img  className="cursor-pointer w-16 h-16 rounded-full object-cover max-md:w-14 max-md:h-14" src="src/photos/my indian photogragh.jpg" alt="photo" />
            <div className=" flex justify-between gap-3 text-2xl text-zinc-100 cursor-pointer ">
                <i className="hover:text-blue-400"><a href={`${Linked}`} target='_blank'><FaLinkedin /></a>  </i>
                <i className="hover:text-green-400"><a href={`${Upwork}`} target='_blank' ><FaSquareUpwork /></a> </i>
                <i className="hover:text-red-400"><a href={`${Github}`} target='_blank' ><FaGithubSquare /></a></i>
            </div>
        </div>
    )
}

export {_Header}