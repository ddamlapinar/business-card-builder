// business-card-builder/src/CardBuilder/Tabs.js
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const TabsButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TabButton = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#e0e0e0" : "#fff")};
  border: none;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export { TabsContainer, TabsButtonContainer,TabButton };