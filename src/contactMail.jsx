import { useState } from "react";
import emailjs from "emailjs-com"; 

const shadowStyle = {
    boxShadow: "0px 0px 90px #0c4a6e"
};

function MailSide() {
    const [forminfo, setforminfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handelMailInfo = (ele) => {
        setforminfo({ ...forminfo, [ele.target.name]: ele.target.value });
    };

    const handelSubmit = (e) => {
        e.preventDefault();

       
        emailjs.sendForm('service_a1ha2u3', 'template_36hbg9w', e.target, '3smDbnvuKzT4O6Zfr')
            .then((result) => {
                alert('Message sent successfully!', result.text);
            })
            .catch((error) => {
                alert('Error sending message', error.text);
            });

        setforminfo({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <form
            className="bg-zinc-300 h-[320px] lg:w-96 md:w-96 sm:w-80 max-sm:w-80 flex flex-col p-5 text-black rounded-lg"
            style={shadowStyle}
            onSubmit={handelSubmit}
        >
            <div className="flex flex-col h-full w-[100%]">
                <div className="flex justify-between items-center w-[100%] mb-5 gap-5">
                    <input
                        className="outline-none p-2 rounded-md w-full"
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        required
                        value={forminfo.firstName}
                        onChange={handelMailInfo}
                    />
                    <input
                        className="outline-none p-2 rounded-md w-full"
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        required
                        value={forminfo.lastName}
                        onChange={handelMailInfo}
                    />
                </div>
                <input
                    className="outline-none p-2 mb-5 rounded-md"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    value={forminfo.email}
                    onChange={handelMailInfo}
                />
                <textarea
                    className="outline-none p-2 mb-5 h-full rounded-md resize-none"
                    name="message"
                    id="message"
                    placeholder="Your message"
                    value={forminfo.message}
                    onChange={handelMailInfo}
                ></textarea>
            </div>
            <button className="bg-zinc-950 text-zinc-200 p-1 text-lg font-bold rounded-lg" type="submit">
                Send
            </button>
        </form>
    );
}

export { MailSide };
