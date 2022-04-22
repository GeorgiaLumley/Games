import styled from "styled-components";

export const Container = styled.div<{
  isGridEdge: boolean;
  isGridBottom: boolean;
}>`
  width: 64px;
  height: 64px;
  border: 1px solid black;
  border-right: ${({ isGridEdge }) =>
    isGridEdge ? "2px solid black" : "1px solid black"};
  border-bottom: ${({ isGridBottom }) =>
    isGridBottom ? "2px solid black" : "1px solid black"};
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
`;

export const GridRow = styled.div`
  display: flex;
`;

export const CellValue = styled.p<{ isStartingValue: boolean }>`
  margin: 0;
  font-size: 25px;
  font-weight: ${({ isStartingValue }) => (isStartingValue ? "600" : "400")};
`;
