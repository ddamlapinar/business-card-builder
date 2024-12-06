import CardDesigner from "./CardDesigner";
import CardInputs from "./CardInputs";

const CardEditor = ({ cardData, setCardData,handleInputChange, handleFileInputChange }) => {
  return (
    <>
      <CardDesigner
        cardData={cardData}
        setCardData={setCardData}
      />
      <CardInputs
        handleFileInputChange={handleFileInputChange}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default CardEditor;
