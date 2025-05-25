import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Reason({ reason, details }) {
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
            <input
                type="checkbox"
                id={reason}
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
            />
            <label htmlFor={reason}>
                {reason}
            </label> <br/>
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
                            <p className="details">{reason}</p>
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

export default Reason;