import { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email is invalid";
        }
        if (!formData.message) formErrors.message = "Message is required";
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // EmailJS parameters
        const serviceID = 'service_rhj5pwt'; // Replace with your service ID
        const templateID = 'template_1keq2ip'; // Replace with your template ID
        const userID = 'oMKoMD09BEO5nE0Bh'; // Replace with your user ID

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
            }, (error) => {
                alert('Failed to send the message, please try again.');
                console.error('EmailJS error:', error);
            });
    };

    return (
        <section id='contact' className='contact-section'>
            <div className='contact-details'>
                <h1>Contact</h1>
                <p>If you want to discuss more in detail, please contact me</p>
                <p><span>Email :</span> sathishsmvce@gmail.com</p>
                <p><span>Phone :</span> +91-9940573781</p>
            </div>
            <div className='contact-form'>
                <form onSubmit={handleSubmit} className='form'>
                    <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <span className='error'>{errors.name}</span>}
                    </div>
                    <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                        <label htmlFor='email'>Your Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <span className='error'>{errors.email}</span>}
                    </div>
                    <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            rows='4'
                            required
                        />
                        {errors.message && <span className='error'>{errors.message}</span>}
                    </div>
                    <button type='submit' className='btn-submit'>
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
