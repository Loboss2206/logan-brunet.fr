import React from "react";
import emailjs from 'emailjs-com';
import CustomTitle from "./CustomTitle";
import { emailServiceId, emailTemplateId, emailUserId } from '../emailjs-id';

const Mail = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        const templateParams = {
            to_name: 'Logan',
            from_name: name,
            from_email: email,
            message: message,
        };

        try {
            await emailjs.send(emailServiceId, emailTemplateId, templateParams, emailUserId);
            alert('Email sent!');
        } catch (error) {
            console.error(error);
            alert('Error sending email');
        }
    };

    return (
        <div
            name="Mail"
            className={`flex items-center w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20`}
        >
            <div className="flex flex-col w-full 2xl:w-2/3 flex-grow p-4 mt-4">
                <CustomTitle
                    title="nano new_mail"
                    margin="8"
                    animationActivated={false}
                    onAnimationEnd={() => { }}
                />
                <form className="flex flex-col gap-1" onSubmit={handleClick}>
                    <label htmlFor="name" className="text-white text-2xl font-bold mt-4">Your Name</label>
                    <input type="text" placeholder="Ex: John" id="name" name="name" className="text-white p-4 rounded-lg bg-gray-800 focus:outline-none shadow-md shadow-gray-900" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="email" className="text-white text-2xl font-bold mt-4">Your Email</label>
                    <input type="email" placeholder="Ex: johndoe@gmail.com" id="email" name="email" className="text-white p-4 rounded-lg bg-gray-800 focus:outline-none shadow-md shadow-gray-900" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="message" className="text-white text-2xl font-bold mt-4">Your Message</label>
                    <textarea id="message" placeholder="Ex: Hello Logan, I'm writing to..." name="message" className="text-white p-4 rounded-lg bg-gray-800 focus:outline-none shadow-md shadow-gray-900 h-48" onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="submit" className="w-48 bg-green-700 text-white text-xl font-bold p-2 mt-4 rounded-md self-center">Send</button>
                </form>
            </div>

        </div>
    );
};

export default Mail;
