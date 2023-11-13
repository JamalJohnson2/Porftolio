import React, { useState, useEffect } from 'react';
import '../Pages/Homepage.css';
import imagePaths from './Imagepaths';
import { Header, Navbar, Mission, Projects, Category, 
Description, Project1, Client, Aboutme } from '../Pages/Animation';
import ImageGrid from './ImageGrid';


const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
    <div className = "container">
      <Navbar/>
      <Header/>
    </div>
    <button
        className={`scroll-button ${scrolled ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    <div className="bodycontent">
    <Mission/>
        <div className="two-column-grid1">
        <div className="left-column">
          <Projects/>
          <Category/>
          <Description/>
        </div>
        <div className="right-column">
          <Project1/>
        </div>
      </div>
      <Client/>
      <div className="two-column-grid-container">
        <div className="two-column-grid">
          <div className="left-column">
            <div className="vertical-line"></div>
            <Aboutme/>
            <p className="Description">Hi, I'm Michael John Diopenes. I'm a UI/UX Designer based in Philippines. I'm [a few key personality traits or interests], and I'm always on the lookout for new experiences and opportunities. 
              When I'm not [working or pursuing your passion], you can find me [hobbies or activities you enjoy]. Let's connect and share our stories!</p>
             <h2 className='educ'>Education</h2>
            <img src={imagePaths.Educ} alt="Education" className='educimg' />
            <h2 className='service'>The service I offer is specifically designed to meet your needs.</h2>
            <p className='servicedescript'>Transforming ideas into stunning, user-friendly websites, we specialize in web design. From concept to development, 
            we create tailored solutions for portfolios, e-commerce, blogs, and corporate sites. Our goal is to bring your digital vision to life</p>
            <button class = "explore-btn">
            Contact Me
            <span class = "arrowbtn">→</span>
            </button>
            <div className="service-container">
            <h2 className='service2'>My experience</h2>
            <p className='servicedescript2'>I've had the pleasure of collaborating with companies across a diverse range of industries, 
            and I'm consistently enthusiastic about pursuing new and exhilarating challenges and opportunities.</p>
          </div>
          </div>
          <div className="right-column">
            <h1 className='platform'>Check out what I'm good at.</h1>
            <ImageGrid />
            <h1>Elementary</h1>
            <h3>Patricia Homes Brgy. San Miguel</h3>
            <h1>High School</h1>
            <h3>Maranatha Christian College</h3>
            <h3>(Humanities and Social Science)</h3>
            <h1>College</h1>
            <h3>La Consolacion College Bacolod</h3>
            <h3>(Bachelor of Science and Information Technology)</h3>
            <div className="container-serv">
            <div className="row-serv">
              <div className="image-container-serv">
                <img src={imagePaths.sv1} alt="Your Image" className="image-sv1" />
              </div>
              <div className="text-container-serv">
                <h1>Branding</h1>
                <p>Unleash brand potential with a visionary designer. I create brand experiences that captivate. 
                  From logos to stories, I craft compelling identities. Your brand, your voice, your success. Let's shape your brand's future together.</p>
              </div>
            </div>
            
            <div className="row-serv">
              <div className="image-container-serv">
                <img src={imagePaths.sv2} alt="Your Image" className="image-sv2" />
              </div>
              <div className="text-container-serv">
                <h1>Graphics</h1>
                <p>At the core of my expertise lies Graphic Design. I'm passionate about translating your vision into captivating visuals. I'm committed 
                  to making your brand's voice stand out, connecting with your audience in a meaningful way. Discover the transformative power of Graphic Design to shape your brand's future.</p>
              </div>
            </div>
            
            <div className="row-serv">
              <div className="image-container-serv">
                <img src={imagePaths.sv3} alt="Your Image" className="image-sv3" />
              </div>
              <div className="text-container-serv">
                <h1>Packaging</h1>
                <p>Packaging is an art form that I specialize in. I believe in the power of a well-designed package to capture attention and leave a lasting impression. 
                  My dedicated team and I excel in creating packaging solutions that not only protect your products but also enhance their appeal.</p>
              </div>
            </div>
            
            <div className="row-serv">
              <div className="image-container-serv">
                <img src={imagePaths.sv4} alt="Your Image" className="image-sv4" />
              </div>
              <div className="text-container-serv">
                <h1>Web Design</h1>
                <p>I am passionate about Web Design and dedicated to turning your online vision into a reality. With a strong emphasis on user experience and aesthetics, I specialize in creating 
                  websites that not only look stunning but also function seamlessly. My goal is to design websites that represent your brand's identity, engage your audience, and drive success.</p>
              </div>
            </div>
          </div>
          <div className="container-myexp">
            <div className="row-myexp">
              <h2>NOV 2022 - FEB 2023</h2>
              <div className="circle-myexp"></div>
              <div className="text-container-myexp">
                <h1>Senior Graphic Designer at BeSoWell</h1>
                <p>Managed a team of designers and oversaw the creative direction of client projects. Developed comprehensive design strategies, created brand identities, 
                  and ensured the delivery of high-quality design solutions that met and exceeded client expectations.</p>
              </div>
            </div>

            <div className="row-myexp">
              <h2>JAN 2021 - SEP 2022&nbsp;&nbsp;</h2>
              <div className="circle-myexp"></div>
              <div className="text-container-myexp">
                <h1>Graphic Designer at Visionary Studios</h1>
                <p>Led the design and execution of various projects, including website graphics, social media content, and product packaging. 
                  Collaborated closely with clients to ensure their visions were brought to life through innovative design.</p>
              </div>
            </div>

            <div className="row-myexp">
              <h2>DEC 2018 - MAR 2019</h2>
              <div className="circle-myexp2"></div>
              <div className="text-container-myexp">
                <h1>Visual Branding Specialist at CreativeVision Studio</h1>
                <p>As a Visual Branding Specialist at CreativeVision Studio, I played a key role in crafting unique brand identities for our clients. 
                  I worked closely with clients to understand their vision and business goals, creating compelling and memorable logos, color palettes, and brand guidelines.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="centered-container">
        <h1>Got a project in mind? Let's work together.</h1>
        <p>I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me, and I will get back to you shortly.</p>
        <div className="email-input">
          <input type="text" placeholder="Enter your email" />
          <button class = "explore-bb">
            Contact Me
            </button>
        </div>
      </div>
      <footer class="footer">
      <h3 class="Copyright">Copyright © VbM 2023. All Rights Reserved.</h3>
      <div class="social-icons">
        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-dribbble"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
      </div>
      </footer>
      </div>
    </div>
    </>
  );
};

export default Portfolio;
