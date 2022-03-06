import styles from './Up.module.css';
import UpIcon from '../ButtonWithIcon/icons/upArrow.svg';
import {useScrollY} from "../../hooks/useScrollY";
import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";
import {ButtonWithIcon} from "../ButtonWithIcon/ButtonWithIcon";

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
    <motion.div
      animate={controls}
      initial={{opacity: 0}}
      className={styles.up}
    >
      <ButtonWithIcon appearance="white" icon="up"  onClick={scrollToTop}/>
    </motion.div>
  );
};
