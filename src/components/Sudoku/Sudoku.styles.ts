import styled from "styled-components";

export const Container = styled.div<{
  isGridEdge: boolean;
  isGridBottom: boolean;
}>`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-right: ${({ isGridEdge }) =>
    isGridEdge ? "2px solid black" : "1px solid black"};
  border-bottom: ${({ isGridBottom }) =>
    isGridBottom ? "2px solid black" : "1px solid black"};
`;

export const Row = styled.div`
  display: flex;
`;

export const GridRow = styled.div`
  display: flex;
`;
