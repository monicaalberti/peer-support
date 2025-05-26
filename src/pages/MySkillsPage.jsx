import React, { useState } from 'react';
import Item from '../components/Item';

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
            <p style={{ textAlign:"center"}}>These are the skills I have which I think would make me an ideal candidate for the Peer Support Leadership Programme.</p>
            <ul  className="lists">
                <li>
                    <Item 
                    item="Tech skills"
                    details="During my time in UCC, as well as my external work experience, I've had the chance to develop my technical skills, which means I would be able to answer most questions the students might have about the Computer Science course." 
                    />
                </li>
                <li>
                    <Item 
                    item="Communication skills"
                    details="I have developed strong communication skills through my previous volunteering and work experiences, which would be beneficial in this role." 
                    />
                </li>
                <li>
                    <Item 
                    item="Empathy and understanding"
                    details="I have a strong sense of empathy and understanding, which I believe is essential for a Peer Support Leader." 
                    />
                </li>
                <li>
                    <Item 
                    item="Experience in finding internships"
                    details="I have have several internship opportunities during my time in university and I believe I could give advise to younger students about CV and interview preparation, which is something most of them will be interested in."
                    />
                </li>
            
            </ul>
        </div>
    );
}
export default MySkillsPage;