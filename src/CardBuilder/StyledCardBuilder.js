import styled from "styled-components";

export const CardFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 100%);
    order: 2;
  }
`;

export const Input = styled.input`
  width: 320px;
  background: #fff;
  border: 1px ${(props) => (props.isFileInput ? "dashed" : "solid")} #c8ceed;
  border-radius: 4px;
  padding: ${(props) => (props.isFileInput ? "60px" : "8px")};
  grid-column: ${(props) => (props.isFileInput ? "1fr" : "2fr")};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 4px;
  color: #050c34;
  font-size: 14px;
  line-height: 1.25rem;
  font-weight: 700;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
`;

export const OptionLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const ColorPickerButton = styled.button`
  width: 25px;
  height: 25px;
  border: 2px solid #fff;
  border-radius: 50px;
  background: ${(props) => props.color};
  cursor: pointer;

  &.activeBg {
    border: 2px solid rgb(9, 113, 241);
    border-radius: 50px;
  }
`;

export const LayoutPickerButton = styled.button`
  min-height: 25px;
  padding: 5px 10px;
  border-radius: 4px;
  background: #f3f3f3;
  cursor: pointer;
  transition: all 0.3s;

  &.activeLayout {
    background: rgb(9, 113, 241);
    color: #fff;
  }
`;
