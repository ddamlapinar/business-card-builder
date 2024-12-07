import {
  OptionLabel,
  ColorPickerButton,
  OptionsContainer,
  OptionContainer,
  LayoutPickerButton
} from "./StyledCardBuilder";
import { GradientConstants, LayoutConstants, TextColorConstants } from "../theme";
import FontPicker from "./FontPicker";
const CardDesigner = ({
  cardData: { bgColor, textColor, layout },
  setCardData
}) => {

  const handleFontChange = (e) => {
    const value = e.target.value;
    setCardData(prev => ({ ...prev, font: value }));
  };

  const handleBgColorChange = (gradient) => {
    setCardData(prev => ({ ...prev, bgColor: GradientConstants[gradient] }));
  };

  const handleTextColorChange = (textColor) => {
    setCardData(prev => ({ ...prev, textColor: TextColorConstants[textColor] }));
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
            isActive={bgColor === GradientConstants[colorKey]}
            color={GradientConstants[colorKey]}
            value={bgColor}
            onClick={() => handleBgColorChange(colorKey)}
            aria-label={`Select ${colorKey} background`}
          />
        ))}
      </OptionContainer>
      <OptionContainer>
        <OptionLabel>Text color </OptionLabel>
        {Object.keys(TextColorConstants).map(colorKey => (
          <ColorPickerButton
            key={colorKey}
            isActive={textColor === TextColorConstants[colorKey]}
            color={TextColorConstants[colorKey]}
            value={textColor}
            onClick={() => handleTextColorChange(colorKey)}
            aria-label={`Select ${colorKey} text color`}
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
