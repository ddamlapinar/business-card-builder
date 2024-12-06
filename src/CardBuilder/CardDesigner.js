import {
  OptionLabel,
  ColorPickerButton,
  OptionsContainer,
  OptionContainer,
  LayoutPickerButton
} from "./StyledCardBuilder";
import { GradientConstants, LayoutConstants } from "../theme";
import FontPicker from "./FontPicker";
const CardDesigner = ({
  cardData: { bgColor, layout },
  setCardData
}) => {

  const handleFontChange = (e) => {
    const value = e.target.value;
    setCardData(prev => ({ ...prev, font: value }));
  };

  const handleColorChange = (gradient) => {
    setCardData(prev => ({ ...prev, bgColor: GradientConstants[gradient] }));
  };

  const handleLayoutChange = (layout) => {
    setCardData(prev => ({ ...prev, layout: LayoutConstants[layout] }));
  };
  return (
    <OptionsContainer>
      <OptionContainer>
        <OptionLabel>Background color </OptionLabel>
        <ColorPickerButton
          className={`${bgColor === GradientConstants.Gray ? "activeBg" : ""}`}
          type="color"
          color={GradientConstants.Gray}
          value={bgColor}
          onClick={() => handleColorChange("Gray")}
        />
        <ColorPickerButton
          className={`${
            bgColor === GradientConstants.Purple ? "activeBg" : ""
          }`}
          color={GradientConstants.Purple}
          value={bgColor}
          onClick={() => handleColorChange("Purple")}
        />
      </OptionContainer>
      <OptionContainer>
        <OptionLabel>Layout: </OptionLabel>
        <LayoutPickerButton
          className={`${
            layout === LayoutConstants.Horizontal
              ? "activeLayout"
              : !layout
              ? "activeLayout"
              : ""
          }`}
          layoutType={LayoutConstants.Horizontal}
          onClick={() => handleLayoutChange("Horizontal")}
        >
          Horizontal
        </LayoutPickerButton>
        <LayoutPickerButton
          className={`${
            layout === LayoutConstants.Vertical ? "activeLayout" : ""
          }`}
          layoutType={LayoutConstants.Vertical}
          onClick={() => handleLayoutChange("Vertical")}
        >
          Vertical
        </LayoutPickerButton>
      </OptionContainer>
      <OptionContainer>
        <OptionLabel>Font</OptionLabel>
        <FontPicker onSelectFont={handleFontChange} />
      </OptionContainer>
    </OptionsContainer>
  );
};

export default CardDesigner;
