import React from 'react';
import './Faq.css';

const faqs = [
    {
        question: "What is Batting Blvd?",
        answer: "We are a state-of-the-art baseball batting cage facility featuring advanced pitching machines and data capture simulation systems. Whether you're a high-level player or a beginner, we have something for everyone."
    },
    {
        question: "How much baseball/softball experience do I need?",
        answer: "None! Our facilities cater to all skill levels, from beginners to advanced players. Our pitching machines are easy to use and can accommodate guests ages 6 and older. "
    },
    {
        question: "Are the batting cages available every day?",
        answer: "Yes, our batting cages are open every day, except on major holidays. We recommend checking our website or contacting us for specific holiday schedules."
    },
    {
        question: "Can I reserve a batting cage in advance?",
        answer: "Absolutely! You can book batting cages up to two weeks in advance through our website. For bookings further in advance, please reach out to our team for assistance."
    },
    {
        question: "Can I bring my own equipment?",
        answer: "Yes, you can bring your own equipment. We also provide high-quality equipment for use at our facility."
    },
    {
        question: "Are there membership packages available?",
        answer: "Yes, we offer various membership packages that provide benefits like discounts on reservations, priority booking, and more."
    },
    {
        question: "Is professional coaching available?",
        answer: "Yes, we offer professional coaching services. Contact us about professional coaching."
    },
    {
        question: "Is there a spectator area?",
        answer: "Yes, we have comfortable spectator areas where friends and family can watch and support you."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards and payments through our integrated app."
    }
];

const Faq = () => {
    return (
        <div className="faq-container">
            <h1 className="faq-title">FREQUENTLY ASKED QUESTIONS</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h2 className="faq-question">Q: {faq.question}</h2>
                    <p className="faq-answer">A: {faq.answer}</p>
                </div>
            ))}
        </div>
    );
}

export default Faq;
