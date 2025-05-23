import React from 'react';
import Reason from '../components/Reason';

const ReasonsPage = () => {

    return (
        <div>
            <h1 style={{color:"purple"}}>Reasons to Volunteer</h1>
            <p>There are several reasons why I would like to apply for this program and become a Peer Support Leader.
                Here is an overview of the main ones:
            </p>
            <ul className="reasons">
            <Reason 
                reason="To make a difference in the very same community that game a chance to thrive." 
                details="UCC has given me oppotunities that I am very grateful for and that have allowed me to achieve my dreams in a lot of ways, both professionally and on a human level. 
                I would like to help younger students have as much of a positive experiece as I did in the college."
            />
            <Reason 
                reason="To gain experience leading and mentoring others" 
                details="Good communication and leadership skills are very important qualities 
                that I've had the chance to aquire thanks to previous volunteering involvement, 
                but that i'm looking to further improve." 
            />
            <Reason 
                reason="To develop my skills in a real-world setting" 
                details="I am looking to gain experience in a professional environment, 
                and I believe that this opportunity will help me to develop my skills and knowledge." 
            />
                
            </ul>
        </div>
    );
}
export default ReasonsPage;