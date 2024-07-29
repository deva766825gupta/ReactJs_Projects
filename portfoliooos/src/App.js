import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav__logo">
          <a href="#">Cod<span>e</span>r.</a>
        </div>
      </nav>
      <header>
        <div className="section__container header__container">
          <p><span>Hello</span> I'm</p>
          <h3>Devansh Gupta</h3>
          <h2 className="section__title">Final Year <span>Undergrad. Student.</span></h2>
          <p>
            Welcome to my portfolio! I'm Devansh Gupta, a final-year Electrical Engineering
            student with expertise in Data Structures and Algorithms (DSA) and a strong focus on problem-solving. Passionate about applying theoretical knowledge to practical challenges and developing efficient, innovative solutions.
          </p>
          <div className="action__btns">
            <button className="btn">Say Hello</button>
            <a href="https://drive.google.com/file/d/1agmoAKWl5cihEReokGGvv2OxUQa72j-_/view?usp=drive_link" className="video" target="_blank" rel="noopener noreferrer">
              <span>Resume</span>
            </a>
          </div>
        </div>
      </header>
      <section className="about">
        <div className="section__container about__container">
          <div className="about__image">
            <img src="/me.jpg" alt="about" />
          </div>
          <div className="about__content">
            <h2 className="section__title">About <span>Me</span></h2>
            <p className="section__subtitle">Becoming a software developer</p>
            <p className="about__details">
              As a final-year Electrical Engineering student, I have developed a comprehensive
              understanding of various subjects, including Data Structures and Algorithms, 
              Operating Systems, Database Management, Computer Networks, and Object-Oriented Programming.
              My expertise extends to programming languages such as Javascript and C++, with
              a keen interest in problem-solving and optimization. Alongside my academic pursuits,
              I have honed my skills as an intermediate full-stack developer, 
              proficient in both front-end and back-end technologies. My expertise
              includes programming languages such as JavaScript,
              as well as frameworks like React and Node.js. I am passionate about 
              creating efficient, scalable web applications and solving complex problems 
              through innovative solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="section__container service__container">
          <p className="section__subtitle">What I learnt!</p>
          <h2 className="section__title"><span>My</span> Technical Skills</h2>
          <div className="service__grid">
            <div className="service__card">
              <i className="ri-smartphone-line"></i>
              <h4>Core Subjects</h4>
              <p>
                DATA STRUCTURES AND ALGORITHMS (DSA) in C++,
                DATABASE MANAGEMENT SYSTEM (DBMS),
                OPERATING SYSTEM (OS), COMPUTER NETWORKING (CN), OBJECT-ORIENTED PROGRAMMING (OOPS)
              </p>
            </div>
            <div className="service__card">
              <i className="ri-code-s-slash-line"></i>
              <h4>Web Development</h4>
              <p>
                HTML, CSS, JAVASCRIPT, REACTJS, TAILWIND CSS, SQL, EXPRESSJS, MONGODB, NODEJS
              </p>
            </div>
            <div className="service__card">
              <i className="ri-edit-2-line"></i>
              <h4>Tools</h4>
              <p>
                GIT, VS Code
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="project">
        <div className="section__container project__container">
          <h2 className="section__title"><span>Lin</span>ks</h2>
          <div className="project__grid">
            <div className="project__card">
              <a href="https://github.com/deva766825gupta?tab=repositories" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
            <div className="project__card">
              <a href="https://www.linkedin.com/in/devansh-g-14a334225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
            <div className="project__card">
              <a href="https://leetcode.com/u/deva766825_gupta/" target="_blank" rel="noopener noreferrer">Leetcode</a>
            </div>
            <div className="project__card">
              <a href="https://codeforces.com/profile/deva766825" target="_blank" rel="noopener noreferrer">Codeforces</a>
            </div>
            <div className="project__card">
              <a href="https://www.geeksforgeeks.org/user/devdtu6l4/" target="_blank" rel="noopener noreferrer">GFG</a>
            </div>
            <div className="project__card">
              <a href="mailto:devanshg755@gmail.com">Send email</a>
              <a href="tel:+91 7668257925">+91 7668257925</a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="section__container footer__container">
          <div className="footer__content">
            <h2 className="section__title">Contact <span>Me!</span></h2>
            <div className="footer__details">
              <p>
                You can reach me through the contact form provided on this
                website. Simply fill out the form with your name, email address,
                and message, and I will get back to you as soon as possible.
              </p>
            </div>
            <div className="social__icons">
              <a href="mailto:devanshg755@gmail.com" className="icon"><i className="ri-mail-line"></i></a>
              <a href="https://www.linkedin.com/in/devansh-g-14a334225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon"><i className="ri-linkedin-fill"></i></a>
            </div>
          </div>
          <form className="footer__form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email Address" />
            <input type="text" placeholder="Your Phone Number" />
            <textarea cols="30" rows="10" placeholder="Your Idea"></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
