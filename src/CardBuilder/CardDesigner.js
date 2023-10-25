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
  layout,
  bgColor,
  setFont,
  setBgGradient,
  setLayout
}) => {
  const handleSelectFont = (e) => {
    const value = e.target.value;
    setFont(value);
  };

  const changeColor = (gradient) => {
    setBgGradient(GradientConstants[gradient]);
  };

  const changeLayout = (layout) => {
    setLayout(LayoutConstants[layout]);
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
          onClick={() => changeColor("Gray")}
        />
        <ColorPickerButton
          className={`${
            bgColor === GradientConstants.Purple ? "activeBg" : ""
          }`}
          color={GradientConstants.Purple}
          value={bgColor}
          onClick={() => changeColor("Purple")}
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
          onClick={() => changeLayout("Horizontal")}
        >
          Horizontal
        </LayoutPickerButton>
        <LayoutPickerButton
          className={`${
            layout === LayoutConstants.Vertical ? "activeLayout" : ""
          }`}
          layoutType={LayoutConstants.Vertical}
          onClick={() => changeLayout("Vertical")}
        >
          Vertical
        </LayoutPickerButton>
      </OptionContainer>
      <OptionContainer>
        <OptionLabel>Font</OptionLabel>
        <FontPicker onSelectFont={handleSelectFont} />
      </OptionContainer>
    </OptionsContainer>
  );
};

export default CardDesigner;
