import styled from "styled-components";

export const ColorItemLI = styled.li`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
  margin-right: 10px;
`;

export const ListItemContainer = styled.li`
  width: 100%;
  padding: 10px;

  .content {
    border-radius: 14px;
    border: 1px solid grey;
    padding: 10px;
  }

  .listItemImage {
    height: 100px;
  }

  .colorsList {
    display: flex;
    list-style: none;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;
