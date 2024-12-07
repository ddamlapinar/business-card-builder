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
      {Object.keys(GradientConstants).map(colorKey => (
          <ColorPickerButton
            key={colorKey}
            className={`${bgColor === GradientConstants[colorKey] ? "activeBg" : ""}`}
            color={GradientConstants[colorKey]}
            value={bgColor}
            onClick={() => handleColorChange(colorKey)}
            aria-label={`Select ${colorKey} background`}
          />
        ))}
      </OptionContainer>
      <OptionContainer>
        <OptionLabel>Layout: </OptionLabel>
        {Object.keys(LayoutConstants).map(layoutKey => (
          <LayoutPickerButton
            key={layoutKey}
            className={`${layout === LayoutConstants[layoutKey] ? "activeLayout" : ""}`}
            layoutType={LayoutConstants[layoutKey]}
            onClick={() => handleLayoutChange(layoutKey)}
            aria-label={`Select ${layoutKey} layout`}
          >
            {layoutKey}
          </LayoutPickerButton>
        ))}
      </OptionContainer>
      <OptionContainer>
        <OptionLabel>Font</OptionLabel>
        <FontPicker onSelectFont={handleFontChange} />
      </OptionContainer>
    </OptionsContainer>
  );
};

export default CardDesigner;
