import React from 'react';
import Item from '../components/Item';

const ReasonsPage = () => {

    return (
        <div className="reasons-skills-container">
            <h2 style={{color:"purple"}}>Reasons to Volunteer</h2>
            <p>There are several reasons why I would like to apply for this program and become a Peer Support Leader.
                Here is an overview of the main ones:
            </p>
            <ul className="lists">
            <Item 
                item="To make a difference in the very same community that game a chance to thrive." 
                details="UCC has given me oppotunities that I am very grateful for and that have allowed me to achieve my dreams, both professionally and personally. 
                I would like to help younger students have as much of a positive experiece as I did in the college."
            />
            <Item 
                item="To gain experience leading and mentoring others" 
                details="Good communication and leadership skills are very important qualities 
                that I've had the chance to aquire thanks to previous volunteering involvement, 
                but that i'm looking to further improve." 
            />
            <Item 
                item="As a goodbye to UCC and to my university experience" 
                details="Next year will be my final year at UCC and I would like to make the most of it. This is why I have been trying to sign up for more opportunities. And I believe helpiing the newcomers is a very good way to say goodbye to the university." 
            />
                
            </ul>
        </div>
    );
}
export default ReasonsPage;