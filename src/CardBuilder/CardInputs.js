import { CardFieldsContainer, Label, Input } from "./StyledCardBuilder";

const CardInputs = ({ handleFileInputChange, handleInputChange }) => {
  return (
    <CardFieldsContainer>
      <Label htmlFor="firstName">
        Name:
        <Input type="text" name="firstName" onChange={handleInputChange} />
      </Label>
      <Label htmlFor="surname">
        Surname:
        <Input name="surname" type="text" onChange={handleInputChange} />
      </Label>
      <Label htmlFor="phone">
        Phone:
        <Input name="phone" type="phone" onChange={handleInputChange} />
      </Label>
      <Label htmlFor="company">
        Company Name:
        <Input name="company" type="text" onChange={handleInputChange} />
      </Label>

      <Label htmlFor="imageUrl">
        Image URL:
        <Input name="imageUrl" type="url" onChange={handleFileInputChange} />
      </Label>
    </CardFieldsContainer>
  );
};

export default CardInputs;
