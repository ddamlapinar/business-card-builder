import { CardContainer, CardImageContainer, CardFieldsContainer, CardFieldContainer, CardLabel, CardField } from "./StyledCardPreview";

const Card = ({ cardData: { imageUrl, firstName, surname, phone, company, bgColor, textColor, layout, font } }) => {

  const cardLogo =
    imageUrl || "https://placehold.jp/dadee7/4a4a4a/120x120.png?text=LOGO";
    const fullName = `${firstName} ${surname}`;
    const CARD_FIELDS = [ 
    {id:'name', label:'Name', value: fullName}, 
    {id:'phone', label:'Phone', value: phone}, 
    {id:'company', label:'Company', value: company}
  ];
  return (
    <CardContainer bgColor={bgColor} textColor={textColor} layout={layout} font={font}>
      <CardImageContainer>
        <img alt="card logo" src={cardLogo} />
      </CardImageContainer>
      <CardFieldsContainer>
          {CARD_FIELDS.map(({id,label,value}) => (
            <CardFieldContainer key={id}>
              <CardLabel>{label}</CardLabel>
              <CardField contentEditable="true">{value}</CardField>
            </CardFieldContainer>
          ))}
      </CardFieldsContainer>
    </CardContainer>
  );
};

export default Card;
