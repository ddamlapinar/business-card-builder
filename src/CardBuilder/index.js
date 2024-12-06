import Card from "../CardPreview";
import React, { useState } from "react";
import { GradientConstants, LayoutConstants } from "../theme";
import CardEditor from "./CardEditor"

export default function CardBuilder() {
  const [cardData, setCardData] = useState({
    imageUrl: "",
    firstName: "",
    surname: "",
    phone: "",
    company: "",
    website: "",
    bgColor: GradientConstants.Gray,
    layout: LayoutConstants.Horizontal,
    font: "Roboto"
  });

  
  const handleInputChange = (e) => {
    const value = e.target.value;

    setCardData(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  const handleFileInputChange = (e) => {
    const { files } = e.target;

    if (!files || !files[0]) {
      return;
    }
      const oldUrl = cardData.imageUrl;

      if (oldUrl && oldUrl.startsWith("blob:")) {
        URL.revokeObjectURL(cardData.imageUrl);
      }
      
      const newUrl = URL.createObjectURL(files[0]);
      setCardData(prev => ({
        ...prev,
       imageUrl: newUrl
      }));
  };
  return (
    <div className="App">
      <h1 className="text-center">Build Your Own Business Card</h1>
      <div className="innerContainer flex-center">
        <CardEditor 
          cardData={cardData} 
          setCardData={setCardData} 
          handleInputChange={handleInputChange}
          handleFileInputChange={handleFileInputChange} 
        />
        <Card cardData={cardData} />
      </div>
    </div>
  );
}