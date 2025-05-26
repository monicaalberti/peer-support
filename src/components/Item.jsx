import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Item({ item, details }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSeeMore = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="item">

            <label htmlFor={item}>
                {item}
            </label>
            <br />
            <button onClick={handleSeeMore}>
                See More
            </button>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 50,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            style={{
                                backgroundColor: "white",
                                padding: "20px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                width: "400px",
                                height: "300px", // Fixed height to prevent shrinking
                                position: "relative",
                            }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
                                {item}
                            </h3>
                            <p style={{ color: "#333", marginBottom: "10px" }}>{details}</p>
                            <button
                                onClick={handleCloseModal}
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                    background: "none",
                                    border: "none",
                                    color: "#888",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                }}
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

export default Item;