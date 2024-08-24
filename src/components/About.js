import AboutImg from '../assets/about.png';
import './about.css';

export default function About() {
    const config = {
        line1: 'Hi, My name is SATHISH COMIC. I am a Full-stack Web Developer. I build beautiful websites with React.js, Tailwind CSS, and Bootstrap.',
        line2: 'I am proficient in Frontend skills like React.js, Redux, Redux Toolkit, Axios, Tailwind CSS, SaSS, CSS3, and many more.',
        line3: 'In backend, I know Node.js, Express.js, MongoDB, and Mongoose.',
        frontendSkills: [
            'Angular',
            'React.js',
            'HTML',
            'CSS',
            'JavaScript'
        ],
        backendSkills: [
            'Spring',
            'Java',
            'C++',
            'C',
            'Python'
        ],
        databaseSkills: [
            'MySQL',
            'Hibernate'
        ],
        tools: [
            'Postman'
        ]
    };

    return (
        <section className='about-section' id='about'>
            <div className='md:w-1/2'>
                <img className='rounded-lg shadow-lg' src={AboutImg} alt='About me' />
            </div>
            <div className='md:w-1/2'>
                <div className='flex flex-col justify-center text-white'>
                    <h1>About Me..</h1>
                    <ul>
                        <li>{config.line1}</li>
                        <li>{config.line2}</li>
                        <li>{config.line3}</li>
                    </ul>
                    <table>
                        <caption> <h2 className='underline-4'> SKILL SET </h2></caption>
                        <thead>
                        <tr>
                            <th>Frontend Skills</th>
                            <th>Backend Skills</th>
                            <th>Database Skills</th>
                            <th>Tools</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{config.frontendSkills.join(', ')}</td>
                            <td>{config.backendSkills.join(', ')}</td>
                            <td>{config.databaseSkills.join(', ')}</td>
                            <td>{config.tools.join(', ')}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
