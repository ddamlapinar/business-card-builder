import PropTypes from "prop-types";
import CardDesigner from "./CardDesigner";
import CardInputs from "./CardInputs";
import { TabButton, TabsButtonContainer, TabsContainer } from "./Tabs";
import { useState } from "react";

const CardEditor = ({ cardData, setCardData,handleInputChange, handleFileInputChange }) => {
  const [activeTab, setActiveTab] = useState("design");
  return (
    <>
      <TabsContainer>
        <TabsButtonContainer>
          <TabButton active={activeTab === "design"} onClick={() => setActiveTab("design")}>Design</TabButton>
          <TabButton active={activeTab === "content"} onClick={() => setActiveTab("content")}>Content</TabButton>
        </TabsButtonContainer>
        {activeTab === "design" && (
          <CardDesigner
            cardData={cardData}
            setCardData={setCardData}
          />
        )}
        {activeTab === "content" && (
          <CardInputs
            handleFileInputChange={handleFileInputChange}
            handleInputChange={handleInputChange}
          />
        )}
      </TabsContainer>
    </>
  );
};

CardEditor.propTypes = {
  cardData: PropTypes.object.isRequired,
  setCardData: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleFileInputChange: PropTypes.func.isRequired
};

export default CardEditor;
