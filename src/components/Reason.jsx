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
            <label htmlFor={reason} className="text-gray-700">
                {reason}
            </label>
            <button
                onClick={handleSeeMore}
                className="ml-4 text-blue-500 underline"
            >
                See More
            </button>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <h2 className="text-xl font-bold mb-4">{reason}</h2>
                            <p className="text-gray-700">{details}</p>
                            <button
                                onClick={handleCloseModal}
                                className="mt-4 text-red-500 underline"
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