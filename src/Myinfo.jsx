import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

const IStyle = {
    Html: {
        padding: '10px',
        borderRadius: '10px',
        color: '#E34F26',
        border: 'solid 2px #30363d',
    },
    Css: {
        padding: '10px',
        borderRadius: '10px',
        color: '#1572B6',
        border: 'solid 2px #30363d',
    },
    Js: {
        padding: '10px',
        borderRadius: '10px',
        color: '#F7DF1E',
        border: 'solid 2px #30363d',
    },
    React: {
        padding: '10px',
        borderRadius: '10px',
        color: '#61DAFB',
        border: 'solid 2px #30363d',
    },
    Tailwind: {
        padding: '10px',
        borderRadius: '10px',
        color: '#38BDF8',
        border: 'solid 2px #30363d',
    },
};

function Information_experians(){
    return(
        
        <div className="lg:flex mt-10 items-center w-[97%] max-md:block max-md:justify-center md:items-center">
        <div className=" text-zinc-100 w-full">
            <h1 className="text-4xl font-semibold mb-5">{'moustafa khamis'.toUpperCase()}</h1>
            <p className="lg:w-[70%] font-semibold text-1xl max-md:w-[100%]">I am a front-end developer with experience in HTML, CSS, JavaScript, and React. I specialize in creating responsive user interfaces and recently started working with Tailwind CSS to enhance my designs.</p>
            <div className="flex gap-5 mt-5 text-zinc-100  font-bold">
            <p className="flex gap-2 items-center" ><FaLocationArrow className="text-1xl" /> <span>Egyption</span></p>
            </div>
            </div>

        <div className="flex lg:text-2xl gap-5 cursor-pointer max-lg:mt-5 md:text-1xl">
        <i className="animate-myBounce" style={{...{animationDuration: `${10}s`},...IStyle.Html}}><FaHtml5/></i>
        <i className="animate-myBounce" style={{...{animationDuration: `${6}s`},...IStyle.Css}}><FaCss3/></i>
        <i className="animate-myBounce" style={{...{animationDuration: `${13}s`},...IStyle.Js}}><FaJs/></i>
        <i className="animate-myBounce" style={{...{animationDuration: `${9}s`},...IStyle.React}}><FaReact/></i>
        <i className="animate-myBounce" style={{...{animationDuration: `${12}s`},...IStyle.Tailwind}}><RiTailwindCssFill/></i>


        </div>
        </div>
        
    )
}

export {Information_experians}