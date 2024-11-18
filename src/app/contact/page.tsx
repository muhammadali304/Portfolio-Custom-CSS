import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import "../styles/contact.css";

export default function Contact () {
    return (
        <div className="contact-div">

            <div className="contact-content">

                <div  className="contact-info">
                    <div className="contact-title">
                        <h1>Get in Touch</h1>
                    </div>

                    <div className="contact-subtitle">
                        <p>Give me a line, give me a call, or give me a message by submitting this form.</p>
                    </div>

                    <div className="contact-item">
                        <IoIosMail size={24} /> 
                        <p className="contact-text">aliyousufpk304@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <FaPhoneAlt size={24}/> 
                        <p className="contact-text">0337-6220645</p>
                    </div>
                </div>

                <form className="contact-form">

                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input 
                            type="text" 
                            name="Name" 
                            id="name" 
                            className="form-input"/>
                    </div>

                    <div className="flex flex-col items-start p-4">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input 
                            type="email" 
                            name="Email"
                            id="email" 
                            className="form-input"/>
                    </div>

                    <div className="flex flex-col items-start p-4">
                        <label htmlFor="message" className="form-label">Message:</label>
                        <textarea 
                            name="userMessage" 
                            id="userMessage"
                            rows={4}
                            className="form-textarea"
                        ></textarea>
                    </div>


                    <button 
                        type="submit" 
                        className="form-submit-button">
                        <b>Submit</b>
                    </button>

                </form>

            </div>
        </div>
    )
}