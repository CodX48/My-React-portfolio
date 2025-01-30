import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

const IStyle = {
    Html: {
        backgroundColor: '#30363d',
        padding: '10px',
        borderRadius: '10px',
        color: '#E34F26',
        border: 'solid 1px #d3d3d3',
    },
    Css: {
        backgroundColor: '#30363d',
        padding: '10px',
        borderRadius: '10px',
        color: '#1572B6',
        border: 'solid 1px #d3d3d3',
    },
    Js: {
        backgroundColor: '#30363d',
        padding: '10px',
        borderRadius: '10px',
        color: '#F7DF1E',
        border: 'solid 1px #d3d3d3',
    },
    React: {
        backgroundColor: '#30363d',
        padding: '10px',
        borderRadius: '10px',
        color: '#61DAFB',
        border: 'solid 1px #d3d3d3',
    },
    Tailwind: {
        backgroundColor: '#30363d',
        padding: '10px',
        borderRadius: '10px',
        color: '#38BDF8',
        border: 'solid 1px #d3d3d3',
    },
};

function styleAnimation(time){
    return({"--my-bounce":`bounce ${time}s infinite alternate`})
  }
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

        <div className="flex lg:text-2xl gap-7 cursor-pointer max-lg:mt-5 md:text-1xl">
        <i className="animate-[--my-bounce]" style={{ ...IStyle.Html, ...styleAnimation(7) }}><FaHtml5/></i>
        <i className="animate-[--my-bounce]" style={{ ...IStyle.Css, ...styleAnimation(4) }}><FaCss3/></i>
        <i className="animate-[--my-bounce]" style={{ ...IStyle.Js, ...styleAnimation(10) }}><FaJs/></i>
        <i className="animate-[--my-bounce]" style={{ ...IStyle.React, ...styleAnimation(7) }}><FaReact/></i>
        <i className="animate-[--my-bounce]" style={{ ...IStyle.Tailwind, ...styleAnimation(9) }}><RiTailwindCssFill/></i>


        </div>
        </div>
        
    )
}

export {Information_experians}