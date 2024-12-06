import { CardContainer, CardImageContainer, CardFieldsContainer, CardFieldContainer, CardLabel, CardField } from "./StyledCardPreview";

const Card = ({ cardData: { imageUrl, firstName, surname, phone, company, bgColor, layout, font } }) => {
  const cardLogo =
    imageUrl || "https://placehold.jp/dadee7/4a4a4a/120x120.png?text=LOGO";
  const fullName = firstName + " " + surname;
  return (
    <CardContainer bgColor={bgColor} layout={layout} font={font}>
      <CardImageContainer>
        <img alt="card logo" src={cardLogo} />
      </CardImageContainer>
      <CardFieldsContainer>
        <CardFieldContainer>
          <CardLabel>Name</CardLabel>
          <CardField contentEditable="true">{fullName}</CardField>
        </CardFieldContainer>
        <CardFieldContainer>
          <CardLabel>Phone</CardLabel>
          <CardField contentEditable="true">{phone}</CardField>
        </CardFieldContainer>
        <CardFieldContainer>
          <CardLabel>Company</CardLabel>
          <CardField contentEditable="true">{company}</CardField>
        </CardFieldContainer>
      </CardFieldsContainer>
    </CardContainer>
  );
};

export default Card;
