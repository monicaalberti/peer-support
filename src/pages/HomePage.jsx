import { React } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const HomePage = () => {
    return (
        <div className="home-page">
            <motion.h1
                initial={{ x: 0, y: 0 }}
                animate={{ x: [-10, 10, -10], y: [-10, 10, -10] }} // Moves diagonally
                transition={{
                    duration: 2, // Duration of one cycle
                    repeat: Infinity, // Infinite loop
                    repeatType: "loop", // Smooth looping
                }}
            >
                Hello there!
            </motion.h1>
            <p>
            My name is Monica and I am here to explain to you why I would like to become a
            Peer Support Leader for the academic year 2025/2026 and why I think I 
            would be a good fit for the position.
            I had a very positive experience with the Peer Support programme when I was a first-year 
            student myself; my peer support leader was very helpful and supported me through a big 
            change in my life, moving from Italy to Ireland and starting university in a new country where
            I didn't know anyone. 
                 
            </p>
            <p>Please take a look at the following pages to see the reasons for my interest in the program and the reasons why I would do a very good job being part of it.</p>
        
            <Link style={{ fontSize:"100%", color:"purple" }} to="/reasons">Reasons for my interest</Link> 
            <br/>
            <Link to="/my-skills">My Skills</Link>
        </div>
    );
}
export default HomePage;