import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Skill({ skill, details }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSeeMore = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="reason">
            {/* <input
                type="checkbox"
                id={skill}
                onChange={handleCheckboxChange}
                className="mr-2"
            /> */}
            <label htmlFor={skill}>
                {skill}
            </label><br/>
            <button
                onClick={handleSeeMore}
            >
                See More
            </button>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <h3 className="details" >{skill}</h3>
                            <p className="details">{details}</p>
                            <button
                                onClick={handleCloseModal}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Skill;