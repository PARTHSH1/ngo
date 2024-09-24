import React, { useState } from 'react';
import './AddDonationFaq.css'
const AddDonationFaq = () => {
    const [open, setOpen] = useState(null);

    const toggleFAQ = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqs = [
        {
            question: "How can I donate?",
            answer: "You can donate by clicking on the 'Donate Now' button and selecting your preferred method of payment."
        },
        {
            question: "Is my donation tax deductible?",
            answer: "Yes, all donations are tax-deductible. We will provide you with the necessary receipts."
        },
        {
            question: "Can I make a recurring donation?",
            answer: "Yes, you can set up a recurring donation during the donation process by selecting the 'Recurring' option."
        },
        {
            question: "How is my donation used?",
            answer: "Your donation is used to support our various programs and initiatives aimed at helping those in need."
        }
    ];

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-header" onClick={() => toggleFAQ(index)}>
                        <h3 className="faq-question">{faq.question}</h3>
                        <span className={`faq-arrow ${open === index ? 'rotate' : ''}`}>&#9662;</span>
                    </div>
                    <p className={`faq-answer ${open === index ? 'show' : ''}`}>
                        {faq.answer}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default AddDonationFaq;
