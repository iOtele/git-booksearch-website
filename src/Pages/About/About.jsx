import React from "react";
import "./About.css";
import AboutImg from "../../Images/About-img.jpeg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={AboutImg} alt="About Image" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About READBOOK</h2>
            <p className="fs-17">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              incidunt exercitationem aperiam? Maxime suscipit adipisci tempore
              facere voluptates quisquam consequuntur ratione ut optio delectus
              doloremque aspernatur tenetur libero repellendus magni laudantium
              ipsa necessitatibus, nulla ipsam earum repellat incidunt quod
              minus! Dolorem, ipsum labore quaerat laudantium recusandae
              quibusdam sequi voluptates itaque.
            </p>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quia eius debitis labore deserunt voluptatum id. Veniam quisquam
              nisi nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
