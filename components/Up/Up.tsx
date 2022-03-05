import styles from './Up.module.css';
import UpIcon from './upArrow.svg';
import {useScrollY} from "../../hooks/useScrollY";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";

export const Up = () => {
  const y = useScrollY();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: y / document.body.scrollHeight > 0.3 ? 1 : 0,
    });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      animate={controls}
      initial={{opacity: 0}}
      type="button"
      className={styles.up}
      onClick={scrollToTop}
    >
      <UpIcon />
    </motion.button>
  );
};
