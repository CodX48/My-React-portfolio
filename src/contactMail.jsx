const shadowStyle = {
    boxShadow: "0px 0px 90px #0c4a6e"
};
function MailSide() {
    return (
        <form className="bg-zinc-300 h-[320px] lg:w-96 md:w-96 sm:w-80 max-sm:w-80 flex flex-col p-5 text-black rounded-lg" style={shadowStyle} onSubmit={(e) => e.preventDefault()} >
           <div className="flex flex-col h-full w-[100%]">
            <div className="flex justify-between items-center w-[100%] mb-5 gap-5">
                <input className="outline-none p-2 rounded-md w-full" type="text" name="firstName" id="firstName" placeholder="First Name" required/>
                <input className="outline-none p-2 rounded-md w-full" type="text" name="lastName" id="lastName" placeholder="Last Name" required/>
            </div>
            <input className="outline-none p-2 mb-5 rounded-md" type="email" name="email" id="email" placeholder="Email" required/>
            <textarea className="outline-none p-2 mb-5 h-full rounded-md resize-none" name="message" id="message" placeholder="Your message"></textarea>
            </div>
            <button className="bg-zinc-950 text-zinc-200 p-1 text-lg font-bold rounded-lg" type="submit">Send</button>
        </form>
    );
}

export {MailSide}