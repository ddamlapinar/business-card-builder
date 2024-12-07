import { CardFieldsContainer, Label, Input } from "./StyledCardBuilder";

const FORM_FIELDS = [
  { id:'firstName', name: 'firstName', label: 'Name', type: 'text', handler: 'handleInputChange' },
  { id:'surname', name: 'surname', label: 'Surname', type: 'text', handler: 'handleInputChange' },
  { id:'phone', name: 'phone', label: 'Phone', type: 'tel', handler: 'handleInputChange' },
  { id:'company', name: 'company', label: 'Company Name', type: 'text', handler: 'handleInputChange' },
  { id:'imageUrl', name: 'imageUrl', label: 'Image URL', type: 'url', handler: 'handleInputChange' },
  { 
    id:'imageFile',
    name: 'imageFile', 
    label: 'Or Upload Image', 
    type: 'file', 
    handler: 'handleFileInputChange',
    accept: 'image/*'
  },
]

const CardInputs = ({ handleFileInputChange, handleInputChange }) => {
  return (
    <CardFieldsContainer>
          {FORM_FIELDS.map(({id,name,label,type,handler,...rest}) => (
            <Label key={id} htmlFor={id}>
              {label}
              <Input id={id} 
                type={type} 
                name={name} 
                onChange={handler === 'handleFileInputChange' ? handleFileInputChange : handleInputChange} 
                {...rest}
              />
            </Label>
          ))}
    </CardFieldsContainer>
  );
};

export default CardInputs;
