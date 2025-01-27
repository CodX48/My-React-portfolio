import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";

const IStyle = {
    React: {
        backgroundColor: '#30363d',
        padding: '10px',
        borderRadius: '100%',
        color: '#61DAFB',
        border: 'solid 2px #61DAFB',
    },
    Tailwind: {
        backgroundColor: '#30363d',
        padding: '10px',
        borderRadius: '100%',
        color: '#38BDF8',
        border: 'solid 2px #38BDF8',
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

        <div className="flex lg:text-2xl gap-10 cursor-pointer max-lg:mt-5 md:text-1xl">
            <i style={IStyle.React} ><FaReact /></i>
            <i style={IStyle.Tailwind} className=""><RiTailwindCssFill /></i>
        </div>
        </div>
        
    )
}

export {Information_experians}