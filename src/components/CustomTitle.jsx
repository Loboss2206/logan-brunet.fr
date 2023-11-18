import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const CustomTitle = ({ title, interval, margin }) => {
    const [visibleText, setVisibleText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const levelClass = `text-2xl md:text-3xl lg:text-4xl xl:text-5xl`;
    const titleRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                    animateText(0);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    const animateText = (index) => {
        if (index <= title.length) {
            setTimeout(() => {
                setVisibleText(title.substring(0, index));
                animateText(index + 1);
            }, 150);
        }
    };

    return (
        <div ref={titleRef} className={`flex items-center mb-${margin}`}>
            {isVisible && (
                <>
                    <span className={`text-green-600 ${levelClass}`}>logan@portfolio</span>
                    <span className={`text-white ${levelClass}`}>:</span>
                    <span className={`text-blue-600 ${levelClass}`}>~</span>
                    <span className={`text-white ${levelClass}`}>$&nbsp;</span>
                    <span className={`text-white ${levelClass}`}>{visibleText}</span>
                </>
            )}
        </div>
    );
};

CustomTitle.propTypes = {
    title: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired,
};

export default CustomTitle;
