'use client'
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Handle form submission logic here (API call, etc.)
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen flex  items-center justify-center bg-background p-6">
            <div className="bg-secondary  shadow-xl rounded-xl p-8 max-w-xl w-full">
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-text">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full text-text mt-1 px-4 py-2 border border-text/50 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full text-text mt-1 px-4 py-2 border border-text/50 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            className="w-full text-text mt-1 px-4 py-2 border border-text/50 rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-background hover:text-primary text-secondary  cursor-pointer  py-2 rounded-lg transition duration-300"
                    > 
                        Send Message
                    </button>
                    <div className='flex text-xl mt-2 text-text'><span className='w-full border-b'>{" "}</span> or <span className='w-full border-b'>{" "}</span> </div>
                    <Link className='flex justify-center items-center gap-4 text-xl duration-300 bg-gray-600 hover:bg-green-600  text-white p-2 rounded-lg' href={'/whatsUp'}><FaWhatsapp /><p> chat on whats App</p></Link>
                </form>
            </div>


        </div>
    );
};

export default ContactPage;
