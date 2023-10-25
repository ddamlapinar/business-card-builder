import Card from "../Card";
import React, { useState } from "react";
import { GradientConstants, LayoutConstants } from "../theme";
import CardDesigner from "./CardDesigner";
import CardInputs from "./CardInputs";
export default function CardBuilder() {
  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    phone: "",
    company: "",
    website: ""
  });
  const [bgColor, setBgGradient] = useState(GradientConstants.Gray);
  const [layout, setLayout] = useState(LayoutConstants.Horizontal);
  const [font, setFont] = useState("Roboto");
  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleFileInputChange = (e) => {
    const value = e.target.value;
    setImageUrl(value);
  };

  return (
    <div className="App">
      <h1 className="text-center">Build Your Own Business Card</h1>
      <div className="innerContainer flex-center">
        <CardDesigner
          bgColor={bgColor}
          layout={layout}
          setFont={setFont}
          setLayout={setLayout}
          setBgGradient={setBgGradient}
        />
        <CardInputs
          handleFileInputChange={handleFileInputChange}
          handleInputChange={handleInputChange}
        />
        <Card
          firstName={formData.firstName}
          surname={formData.surname}
          phone={formData.phone}
          company={formData.company}
          imageUrl={imageUrl}
          bgColor={bgColor}
          layout={layout}
          font={font}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}
