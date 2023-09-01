import React from 'react';
import './AboutMe.css'; // You can create a CSS file for styling

function AboutMe() {
  return (
    <div className="about-me-container">
      <h2 className="section-header">About Me: Ian - Frontend Engineer with a Passion for Innovation</h2>
      <p className="about-me-text">
        Hello! I'm Ian, a dedicated Frontend Engineer with over 6.5 years of experience in the ever-evolving world of web development. My journey through the digital landscape has been nothing short of exhilarating, and I'm thrilled to share a bit about myself with you.
      </p>

      <div className="professional-journey">
        <h3 className="subsection-header">Professional Journey:</h3>
        <p>
          My career as a Frontend Engineer has been a dynamic ride. Over the years, I've had the privilege of working with a wide range of frameworks and technologies, but my heart truly belongs to React and TypeScript. These tools have not only become my specialization but also my canvas for creating delightful and user-centric web experiences. I thrive on building clean, maintainable code and crafting intuitive user interfaces.
        </p>
      </div>

      <div className="passions">
        <h3 className="subsection-header">Passions Beyond Code:</h3>
        <p>
          While I take immense pride in my work, I'm equally passionate about a few other things that make me who I am. First and foremost, I'm an avid gamer. Video games have been a significant part of my life, sparking my curiosity in technology and design from an early age. Whether it's exploring vast open worlds, strategizing in competitive games, or immersing myself in the storytelling of RPGs, gaming is my ultimate form of relaxation and inspiration.
        </p>
        <p>
          Alongside gaming, I have a deep-rooted love for esports. The world of competitive gaming fascinates me, from the strategic gameplay to the dedicated communities that surround it. I follow esports events closely, often attending tournaments and even trying my hand at amateur competitions. Being part of this thriving ecosystem, whether as a spectator or a participant, is an exhilarating experience.
        </p>
      </div>

      <div className="journey-ahead">
        <h3 className="subsection-header">The Journey Ahead:</h3>
        <p>
          In this ever-evolving field of web development, I believe in the power of continuous learning and adaptability. My goal is to stay at the forefront of technological advancements, always seeking new ways to enhance user experiences and solve complex problems. I thrive on challenges and am excited about what the future holds for the world of frontend engineering.
        </p>
      </div>

      <p className="contact-info">
        In conclusion, I'm Ian, a passionate Frontend Engineer who thrives on innovation, gaming, and esports. I'm committed to delivering top-notch web experiences while staying connected to my roots in the gaming world. If you share any of these passions or want to collaborate on exciting projects, feel free to reach out. Let's create, innovate, and game on together!
      </p>
    </div>
  );
}

export default AboutMe;