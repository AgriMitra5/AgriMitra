import React, { useState } from "react";
import Image1 from "../assets/farmer/farmer11.jpg";

import "./AboutUs.css";

const AboutUs = () => {
  const [isMarathi, setIsMarathi] = useState(false); // Initial state is English

  const toggleLanguage = () => {
    setIsMarathi(!isMarathi); // Toggle between English and Marathi
  };

  const englishText = {
    heading: "Why Choose Us?",
    description: "At AgriMitra, we bridge the gap between commercial Farmer and small-scale farmers by facilitating the rental of essential farming assets. Our mission is to support small-scale farmers with access to advanced equipment, enabling them to enhance productivity and achieve their agricultural goals.",
    listItems: [
      "Connect with trusted commercial Farmer who provide high-quality equipment.",
      "Affordable rental options to access essential farming tools.",
      "Empowering small farmers to grow and succeed with state-of-the-art farming equipment."
    ]
  };

  const marathiText = {
    heading: "आम्हाला का निवडा?",
    description: "अग्रीमित्रमध्ये, आम्ही मोठ्या शेतकऱ्यांसाठी आणि लहान प्रमाणातील शेतकऱ्यांसाठी आवश्यक शेतकरी उपकरणांच्या भाड्याने घेतलेले सहाय्य करत आहोत. आमचे मिशन म्हणजे लहान प्रमाणातील शेतकऱ्यांना प्रगत उपकरणे उपलब्ध करून देणे, जेणेकरून ते उत्पादनक्षमता वाढवू शकतील आणि त्यांच्या कृषी ध्येयांपर्यंत पोहोचू शकतील.",
    listItems: [
      "विश्वसनीय मोठ्या प्रमाणातील शेतकऱ्यांशी कनेक्ट करा जे उच्च-गुणवत्तेची उपकरणे प्रदान करतात.",
      "आवश्यक शेतकरी उपकरणे ऍक्सेस करण्यासाठी स्वस्त भाड्याचे पर्याय.",
      "लहान शेतकऱ्यांना आधुनिक शेतकरी उपकरणांसह वाढविणे आणि यशस्वी होण्यासाठी मदत करणे."
    ]
  };

  return (
    <section className="py-3 py-md-5">
      <div className="container custom-container">
        <div className="row">
          <div className="col-12">
          <h2 className="mb-3 custom-heading">{isMarathi ? marathiText.heading : englishText.heading}</h2>

            <img
              className="img-fluid rounded custom-img"
              loading="lazy"
              src={Image1}
              alt="Farming Assets"
            />

            
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p className="lead mb-3 mb-xl-5 custom-text">
              {isMarathi ? marathiText.description : englishText.description}
            </p>
            <ul className="custom-list">
              {(isMarathi ? marathiText.listItems : englishText.listItems).map((item, index) => (
                <li key={index} className="fs-5 m-0 custom-list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 16 16">&nbsp;
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button type="button" className="btn bsb-btn-xl btn-green rounded-pill" onClick={toggleLanguage}>
              {isMarathi ? "English" : "Marathi"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
