import styled from "styled-components";
const CardContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.layout.direction};
  width: ${(props) => props.layout.width};
  height: ${(props) => props.layout.height};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  font-family: ${(props) => props.font}, sans-serif;
  box-shadow: 8px 10px 16px 0px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 48px;
  gap: 32px;
  letter-spacing: 0.5px;
  transition: all 0.3s;
`;

CardContainer.defaultProps = {
  layout: {
    width: "18rem",
    height: "10rem",
    direction: "row"
  }
};

const CardImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 120px;
    height: 120px;
    object-fit: fill;
    border-radius: 50%;
    border: 2px solid #dadee7;
  }
`;

const CardFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardFieldContainer = styled.div`
  min-height: 48px;
`;

const CardField = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 1.25rem;

  &[contenteditable="true"] {
    &:focus {
      outline: 1px solid #fff;
    }
  }
`;

const CardLabel = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.25rem;
`;

export { CardContainer, CardImageContainer, CardFieldsContainer, CardFieldContainer, CardLabel, CardField };
