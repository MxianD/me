
"use client";
import { useState, useEffect } from 'react';
import styles from "./sample_introduction.module.css";
const SampleIntroduction = ({ words, color }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const word = words[currentWordIndex];
        let textTimeout;

        const updateText = () => {
            if (isDeleting) {
                setDisplayedText(word.slice(0, charIndex) + '|');
                setCharIndex((prev) => prev - 1);
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                setDisplayedText(word.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
                if (charIndex === word.length) {
                    setIsDeleting(true);
                }
            }
        };

        textTimeout = setTimeout(updateText, isDeleting ? 100 : 150);
        return () => {
            clearTimeout(textTimeout);
        };
    }, [charIndex, isDeleting, currentWordIndex]);

    return (
        <div className={`font-bold text-4xl ${styles[color]}`}>{displayedText}</div>
    );
};

export default SampleIntroduction;
