import { MailSide } from "./contactMail"

const MyConstactInfo = {
    contact:{
        mail: 'moustafakhamis808@gmail.com',
        phoneNum: '+90 531 598 63 69'
    },
    SocailMedia:{
        Instegram: 'https://www.instagram.com/mo_bro_69?igsh=MWxpMDdmbzNpa3hvbQ==',
        WhatsApp: 'https://wa.me/+905315986369',
        X:''
    },
    _Location:{
        L: "istanbul tr"
    }
}


function ContactInfo(){
    return(
        
        <div className="w-full flex justify-between items-center px-14 py-10 mt-20 lg:flex-row md:flex-col-reverse gap-10 sm:flex-col-reverse max-sm:flex-col-reverse sm:px-20">
            <div>
            <h1 className="text-4xl mb-20 text-zinc-500">{'Constact us'.toUpperCase()}</h1>
        <div className="z-20 gap-5 flex justify-between ">
            <div>
            <p className="text-sm font-bold mb-5 text-zinc-400 md:mb-2 sm:flex-col">contact</p>
            <p className="text-xs">{MyConstactInfo.contact.mail}</p>
            <p className="text-xs mt-1">{MyConstactInfo.contact.phoneNum}</p>
            </div>

            <div className="w-fit flex flex-col">
            <p className="text-sm font-bold mb-5 text-zinc-400 md:mb-2 sm:flex-col">Socail Media</p>
            <div className=" flex flex-col gap-3 items-start text-xs">
            <i><a href={MyConstactInfo.SocailMedia.Instegram} >Instegram</a></i>
            <i><a href={MyConstactInfo.SocailMedia.WhatsApp}>WhatsApp</a></i>
            <i><a href={MyConstactInfo.SocailMedia.X}>X</a></i>
            </div>
            </div>
            <div>
            <p className="text-sm font-bold mb-5 text-zinc-400 md:mb-2 sm:flex-col">Location</p>
            <p className="text-xs">{(MyConstactInfo._Location.L.toUpperCase())}</p>
            </div>
        </div>
            </div>
            
        <MailSide />
            </div>
        
    )
}

export {ContactInfo}