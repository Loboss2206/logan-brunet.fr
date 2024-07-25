import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CustomTitle = ({ title, margin, onAnimationEnd, animationActivated }) => {
  const { t } = useTranslation();
  const [visibleText, setVisibleText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const levelClass = `text-2xl md:text-3xl lg:text-4xl`;
  const titleRef = useRef();

  const titleSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    marginTop: isVisible ? 0 : parseInt(margin, 10),
    from: { opacity: 0, marginTop: parseInt(margin, 10) },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && animationActivated) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
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
  }, [animationActivated]);

  useEffect(() => {
    if (isVisible && animationActivated && !isAnimationFinished) {
      animateText(0);
    } else if (!animationActivated) {
      setVisibleText(t(title));
      setIsVisible(true);
      setIsAnimationFinished(true);
    }
  }, [isVisible, animationActivated, isAnimationFinished, t, title]);

  useEffect(() => {
    if (isAnimationFinished) {
      onAnimationEnd();
    }
  }, [isAnimationFinished, onAnimationEnd]);

  const animateText = (index) => {
    if (index <= t(title).length && animationActivated) {
      setTimeout(() => {
        setVisibleText(t(title).substring(0, index));
        animateText(index + 1);
      }, 150);
    } else {
      setIsAnimationFinished(true);
    }
  };

  const text = "text-black dark:text-white";

  return (
    <animated.div style={titleSpring}>
      <motion.div
        ref={titleRef}
        className={`flex items-center mb-2`}
        style={{
          marginTop: `${margin / 2}em`,
          fontSize: "1.5rem",
          wordWrap: "break-word",
        }}
      >
        <span
          className={`text-green-600 font-medium dark:font-normal ${levelClass}`}
        >
          logan@portfolio
          <span
            className={`${text} font-medium dark:font-normal ${levelClass}`}
          >
            :
          </span>
          <span
            className={`text-blue-600 font-medium dark:font-normal ${levelClass}`}
          >
            ~
          </span>
          <span
            className={`${text} font-medium dark:font-normal ${levelClass}`}
          >
            $&nbsp;
          </span>
          <span
            className={`${text} font-medium dark:font-normal ${levelClass}`}
          >
            {visibleText}
          </span>
        </span>
      </motion.div>
    </animated.div>
  );
};

CustomTitle.propTypes = {
  title: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
  onAnimationEnd: PropTypes.func,
  animationActivated: PropTypes.bool,
  currentLanguage: PropTypes.string.isRequired,
};

CustomTitle.defaultProps = {
  animationActivated: true,
};

export default CustomTitle;
