import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from '@mui/icons-material/Cancel';

const Navbar = () => {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  const [isCancel,setIsCancel] = useState(false)

  useEffect(() => {
    // Function to update isMenuDisplayed based on screen width
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMenuDisplayed(screenWidth <= 578);
      setIsCancel(screenWidth<=578)
    };

    // Set the initial state based on the current screen width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
   const menuBtnHandler = ()=>{
    setIsMenuDisplayed(false)
    setIsCancel(true)
   }
   const cnlBtnHandler = ()=>{
    setIsMenuDisplayed(true)
    setIsCancel(false)
   }
  return (
    <div className={styles["navbar-container"]}>
      <nav className={styles.navbar}>
        <div className={styles["logo"]}>IMAGE SLIDER</div>
        {isMenuDisplayed &&  <MenuIcon onClick={menuBtnHandler}  />}
       {!isMenuDisplayed && isCancel && <CancelIcon onClick={cnlBtnHandler} />}
        <ul className={styles["navbar-items-list"]}>
          {!isMenuDisplayed && <li className={styles["navbar-items"]}>Home</li>}
          {!isMenuDisplayed && <li className={styles["navbar-items"]}>Services</li>}
          {!isMenuDisplayed && <li className={styles["navbar-items"]}>Contact us</li>}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
