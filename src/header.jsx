import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

function _Header(){
    return(
        <div className="flex justify-between items-center px-2">
            <img  className="cursor-pointer w-16 h-16 rounded-full object-cover" src="src/photos/my indian photogragh.jpg" alt="photo" />
            <div className=" flex justify-between gap-3 text-2xl text-zinc-100  cursor-pointer ">
                <i className="hover:text-blue-400"><a href=""><FaLinkedin /></a>  </i>
                <i className="hover:text-green-400"><a href=""><FaSquareUpwork /></a> </i>
                <i className="hover:text-red-400"><a href=""><FaGithubSquare /></a></i>
            </div>
        </div>
    )
}

export {_Header}