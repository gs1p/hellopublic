import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const animations = {
    Righttoleft:{
        initial : {opacity: 0, x: 100},
        animate: {opacity: 1, x: 0},
        exit: {opacity: 0, x: -100},
    },

    leftToRight: {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    },
    topToBottom: {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
    },
    bottomToTop: {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
    },
};

const AnimatedPage = ({ children, direction }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(ref.current);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <motion.div
            ref={ref}
            variants={animations[direction]}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            exit="exit"
            transition={{ duration: 1.5 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;