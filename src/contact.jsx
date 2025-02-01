import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
const MyConstactInfo = {
    contact:{
        mail: 'moustafakhamis808@gmail.com',
        phoneNum: '+90 531 598 63 69'
    },
    SocailMedia:{
        Instegram: 'https://www.instagram.com/mo_bro_69?igsh=MWxpMDdmbzNpa3hvbQ==',
        WhatsApp: 'https://wa.me/+905315986369',
        X:''
    }
}


function ContactInfo(){
    return(
        
        <div className="w-full flex relative justify-between items-center px-20 py-10 mt-20 ">
        <div className="z-20 p-5 gap-20 flex justify-between ">
                
            <div >
            <p className="text-sm font-bold mb-5 text-zinc-400">contact</p>
            <p className="text-xs">{MyConstactInfo.contact.mail}</p>
            <p className="text-xs mt-1">{MyConstactInfo.contact.phoneNum}</p>
            </div>

            <div className="w-fit flex flex-col">
            <p className="text-sm font-bold mb-5 text-zinc-400">Socail Media</p>
            <div className=" flex flex-col gap-3 items-start text-xs">
            <i><a href={MyConstactInfo.SocailMedia.Instegram} >Instegram</a></i>
            <i><a href={MyConstactInfo.SocailMedia.WhatsApp}>WhatsApp</a></i>
            <i><a href={MyConstactInfo.SocailMedia.X}>X</a></i>
            </div>
            </div>
        </div>
        <div className="">
            <p></p>
        <form action="" className="z-20 flex relative flex-col justify-between items-start gap-5 rounded-md ">
                <input className="bg-zinc-900 text-zinc-200 px-16 pl-5 py-2 rounded-md text-md outline-none font-semibold " type="text" name="Gamil" id="" placeholder="Gamil" />
                <input className="bg-pink-950 absolute left-60 text-sm h-full px-5 py-1 rounded-md text-zinc-200 font-bold cursor-pointer" type="button" value="SEND" />
                </form>
        
        </div>
            </div>
        
    )
}

export {ContactInfo}