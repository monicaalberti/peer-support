import React, { useState } from 'react';
import Skill from '../components/Skill';

const MySkillsPage = () => {
    const [skills, setSkills] = useState([
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Node.js', level: 'Beginner' },
        { name: 'CSS', level: 'Intermediate' },
    ]);

    return (
        <div className="reasons-skills-container">
            <h2>Why I think I would be a good fit:</h2>
            <ul  className="lists">
                <li>
                <Skill 
                skill="Tech skills and work experience"
                details="During my time in UCC, as well as my external work experience, I've had the chance to develop my technical skills and I believe I could give advise on how to " 
                />
                </li>
                {/* <li><Skill /></li>
                <li><Skill /></li>
                <li><Skill /></li>
                <li><Skill /></li> */}
            </ul>
        </div>
    );
}
export default MySkillsPage;