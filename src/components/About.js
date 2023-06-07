import React from "react";
import "./css/about.css";

function About() {
  return (
    <div className="about" style={{ marginLeft: "100px" }}>
      <h2 className="aboutHeader" style={{ textAlign: "center" }}>
        About the site
      </h2>
      <h3 className="aboutHeader">Who we are?</h3>
      <p className="about">
        The website Eat&amp;Fit was founded in 2023 by Yuval Avitan and Victoria
        Hlustov accompanied by the academic supervisor - Michael Kieperberg and
        the professional supervisor - Alex Veksler.
      </p>

      <h3>Our vision and values</h3>
      <p className="about">
        EAT&amp;FIT is designed to offer a solution to customers of the general
        public who are interested in losing weight/maintaining their current
        weight, help them maintain their health, promote the public's awareness
        of healthy nutrition in a practical way and to adopt it as a way of
        life.
      </p>

      <h3>The purpose of the site</h3>
      <p className="about">
        It is proposed to provide users with the opportunity to obtain a
        customized nutrition menu for a nominal fee, utilizing specific
        nutritional criteria such as age, height, weight, intended dietary
        purpose, and health declaration. This feature is aimed at individuals
        who have normal blood test results and are covered under all health
        insurance funds.
      </p>

      <h3>Site content</h3>
      <p className="about">
        Information is available about a healthy lifestyle in order to broaden
        the horizons of the users. The information includes articles,
        explanations, training plans, photos, personalized nutrition menus,
        recipes of all kinds, an automated chat is available that will accompany
        the user throughout the weight loss process.
      </p>

      <p className="about">
        To contact the site administrators, you can send an email to:{" "}
        <a href="mailto:vickyeaf@gmail.com">vickyeaf@gmail.com</a>
      </p>

      <p className="about">
        <strong>Enjoy browsing the site!</strong>
      </p>
    </div>
  );
}

export default About;
