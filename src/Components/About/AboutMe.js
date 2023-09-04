import React from 'react';
import './AboutMe.css'; // You can create a CSS file for styling

function AboutMe() {
  return (
    <div className="about-me-container">
      <h2 className="section-header">Hey there, I'm Ian - a Frontend Engineer Passionate about Innovation</h2>
      <p className="about-me-text">
        Greetings! I'm Ian, an enthusiastic Frontend Engineer with over 6.5 years of exhilarating experience in the ever-evolving realm of web development. My journey through the digital landscape has been nothing short of an adventure, and I'm thrilled to share a bit about myself with you.
      </p>

      <div className="professional-journey">
        <h3 className="subsection-header">My Exciting Journey:</h3>
        <p>
          My career as a Frontend Engineer has been a dynamic ride. Over the years, I've had the privilege of dancing with a wide range of frameworks and technologies, but my heart truly beats for React and TypeScript. These tools are not just my specialty; they are my canvas for crafting delightful, user-centric web experiences. I take immense pride in building clean, maintainable code and designing intuitive user interfaces.
        </p>
      </div>

      <div className="passions">
        <h3 className="subsection-header">Beyond the Code:</h3>
        <p>
          While I'm passionate about my work, there are a few other things that define who I am. First and foremost, I'm an avid gamer. Video games have been an integral part of my life, igniting my curiosity in technology and design from an early age. Whether I'm exploring expansive virtual worlds, strategizing in competitive games, or immersing myself in the narratives of RPGs, gaming is my ultimate form of relaxation and inspiration.
        </p>
        <p>
          Alongside gaming, I have a profound love for esports. The world of competitive gaming captivates me, from the strategic gameplay to the vibrant communities that surround it. I closely follow esports events, often attending tournaments and even trying my hand at amateur competitions. Being part of this thriving ecosystem, whether as a spectator or a participant, is an electrifying experience.
        </p>
        <p>Esports and Coding are two of the few venues in life where you can give yourself the feel of progression of an Anime protagonist or 80s montage. This is it for me.</p>
      </div>

      <div className="journey-ahead">
        <h3 className="subsection-header">The Path Forward:</h3>
        <p>
          In this ever-evolving field of web development, I firmly believe in the power of continuous learning and adaptability. My mission is to remain at the forefront of technological advancements, always seeking innovative ways to enhance user experiences and tackle complex challenges. I thrive on overcoming obstacles and am deeply excited about the boundless possibilities that await us in the world of frontend engineering.
        </p>
      </div>

      <p className="contact-info">
        In closing, I'm Ian, a passionate Frontend Engineer who thrives on innovation, gaming, and esports. I'm committed to delivering top-notch web experiences while staying deeply connected to my roots in the gaming world. If you share any of these passions or wish to collaborate on exciting projects, please don't hesitate to reach out. Let's create, innovate, and game on together!
      </p>
    </div>
  );
}

export default AboutMe;
