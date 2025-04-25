import React, { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";

function Contact() {
    const [errors, setErrors] = useState({});

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            setErrors({ name: "Name is required" });
            return;
        }
        if (!formData.email.trim()) {
            setErrors({ email: "Email is required" });
        }

        console.log("Form submitted:", formData);
        alert("Form submitted!");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    async function handleEmailCopied() {
        try {
            await navigator.clipboard.writeText("needagoodemail@gmail.com");
        } catch (error) {
            console.error("Error copying email : ", error.message);
        }
    }

    return (
        <div className="flex flex-col lg:flex-row mx-10 items-center justify-center gap-8 md:mt-32 mt-20">
            <form
                onSubmit={handleSubmit}
                className="max-w-lg w-full p-6 bg-white border border-soft-gray rounded-lg shadow-md"
            >
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-charcoal text-base mb-2"
                    >
                        Name *
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-charcoal bg-soft-white border border-soft-gray rounded-md focus:outline-none focus:ring-1 focus:ring-muted-blue"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-charcoal text-base mb-2"
                    >
                        Email *
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-charcoal bg-soft-white border border-soft-gray rounded-md focus:outline-none focus:ring-1 focus:ring-muted-blue"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="phone"
                        className="block text-charcoal text-base mb-2"
                    >
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-charcoal bg-soft-white border border-soft-gray rounded-md focus:outline-none focus:ring-1 focus:ring-muted-blue"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-charcoal text-base mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-charcoal bg-soft-white border border-soft-gray rounded-md focus:outline-none focus:ring-1 focus:ring-muted-blue"
                    />
                </div>
                <button
                    type="submit"
                    className=" mt-6 bg-[#3a74b6] text-[#FFFFFF] border-[#4A90E2] hover:font-semibold active:font-semiboldborder-1 px-3 py-1.5 rounded-md items-center flex shadow-2xl hover:shadow-xl active:shadow-xl hover:cursor-pointer"
                >
                    Send Form
                </button>
            </form>

            {/* Just Email Me Section */}
            <div className="flex flex-col items-center lg:items-start text-charcoal text-lg hover:cursor-copy lg:mt-0 mt-22">
                <p className="text-center lg:text-left mb-4">
                    Or just email me directly!
                </p>
                <div
                    className="flex items-center text-muted-blue text-2xl"
                    onClick={handleEmailCopied}
                >
                    <MdEmail className="mt-1.5 text-[#4A90E2]" />
                    <span className="ml-2 text-[#4A90E2]">
                        needagoodemail@gmail.com
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
