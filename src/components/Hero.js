import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import './hero.css';

export default function Hero() {
    const config = {
        subtitle: 'I\'m a Full-stack Developer and Designer',
        social: {
            github: 'https://github.com/Sathishcomic',
            facebook: 'https://www.facebook.com/sathish.sundaram.716',
            linkedin: 'https://www.linkedin.com/in/sathish-sundaram-b95a2925b',
            instagram: 'https://www.instagram.com/sathishcomic/'
        }
    }

    return (
        <section className='hero-section flex flex-col md:flex-row px-5 py-40 bg-primary justify-center relative'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white font-hero-font text-shadow'>
                    Hi, <br />
                    I'm <span className='text-orange-600 name-animation'>SATHISH COMIC..</span>
                    <p className='text-3xl mt-4'>{config.subtitle}</p>
                </h1>
                <div className='social-links flex py-10'>
                    <a href={config.social.github} className='social-icon'>
                        <AiOutlineGithub size={40} />
                    </a>
                    <a href={config.social.facebook} className='social-icon'>
                        <AiOutlineFacebook size={40} />
                    </a>
                    <a href={config.social.linkedin} className='social-icon'>
                        <AiOutlineLinkedin size={40} />
                    </a>
                    <a href={config.social.instagram} className='social-icon'>
                        <AiOutlineInstagram size={40} />
                    </a>
                </div>
            </div>
            <img className='hero-img md:w-1/3 z-10' src={HeroImg} alt='Hero' />
            <div className='animated-background'></div>
        </section>
    );
}
