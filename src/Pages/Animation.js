import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import imagePaths from './Imagepaths';

export function Header(){
    return(
      <motion.div 
      initial={{ opacity: 0, translateY: 100 }} 
      whileInView={{ opacity: 1, translateY: 0 }} 
      transition={{ duration: 1.5 }}
      >
        <div    class = "header">
        <h1     class = "title">A Palette of Possibilities</h1>
        <p      class = "subtitle">Welcome to my world of design, where imagination meets innovation and pixels dance to create visually stunning stories.</p>
        <button class = "explore-button">
          Explore
          <span class = "arrow">→</span>
          </button>
      </div>
      </motion.div>
    )
  }
  export function  Navbar(){
    return(
      <>
      <motion.div
      
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="navbar"
      >
        <ul>
          <li><a href="">About Me</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <button className="top-right-button">Get in touch</button>
      </motion.div>
      </>
    )
  }
  export function  Mission() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100; 
  
        if (scrollPosition > scrollThreshold) {
          setIsVisible(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <motion.h1
      initial={{ opacity: 0, x: -100 }} 
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.5 }}
      className="mission-text"
      >
        My mission is to infuse creativity and purpose into the visual world through compelling design. I captivate, convey, and connect ideas through innovative design, elevating brands and inspiring audiences for a more engaging, aesthetically pleasing world.
      </motion.h1>
    );
  }
  export function  Projects(){
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 600; 
  
        if (scrollPosition > scrollThreshold) {
          setIsVisible(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <motion.h1
      initial={{ opacity: 0, x: -100 }} 
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.5}}
      >
        Recent Project
      </motion.h1>
    )
  }
  export function  Category(){
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 600; 
  
        if (scrollPosition > scrollThreshold) {
          setIsVisible(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <motion.h1
      initial={{ opacity: 0, x: -100 }} 
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.8}}
      >
      <h4 className="inline-h4">Website</h4>
      <h4 className="inline-h4">Lost and Found</h4>
      </motion.h1>
    )
  }
  export function  Description(){
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 700; 
  
        if (scrollPosition > scrollThreshold) {
          setIsVisible(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <motion.h1
      style={{
        fontSize: '17px',
        lineHeight: '25px',

      }}
      initial={{ opacity: 0, x: -100 }} 
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 2}}
      >
      <h2>LostLinker Lost and Found platform</h2>
      <p>Lost Linker is an innovative software solution aimed at revolutionizing the way educational institutions handle the ubiquitous problem of lost and found items. 
      This platform empowers students by providing them with an efficient and user-friendly tool to manage their lost and found possessions effectively.</p>
      </motion.h1>
    )
  }
  export function  Project1(){
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 600;
  
        setIsVisible(scrollPosition > scrollThreshold);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <motion.h1
        style={{
          fontSize: '17px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 3 }} 
      >
       <img src={imagePaths.Project1} alt="Big Image" />
      </motion.h1>
    )
  }
  export function Client() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 600;
  
        if (scrollPosition > scrollThreshold) {
          setIsVisible(true);
  
          window.removeEventListener("scroll", handleScroll);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <motion.h1
        style={{
          fontSize: '17px',
        }}
        initial={{ opacity: 0, translateY: 100 }}
        animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
        transition={{ duration: 3 }}
      >
        <div className="three-column-grid">
          <div className="column">
            <h1>30+</h1>
            <h3>Satisfied clients</h3>
          </div>
          <div className="column">
            <h1>50+</h1>
            <h3>Projects completed</h3>
          </div>
          <div className="column">
            <h1>99+</h1>
            <h3>Reviews given</h3>
          </div>
        </div>
      </motion.h1>
    );
  }
  export function  Aboutme(){
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 700; 
  
        if (scrollPosition > scrollThreshold) {
          setIsVisible(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <motion.h1
      initial={{ opacity: 0, x: -100 }} 
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 2}}
      >
      <h1 className='me'>About me</h1>
      </motion.h1>
    )
  }