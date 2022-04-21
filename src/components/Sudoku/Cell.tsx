import React from "react";

import { decodeCellPosition } from "../../utils";

import { Container } from "./Sudoku.styles";

interface IProps {
  position: string;
}

const Cell = ({ position }: IProps) => {
  const cellPosition = decodeCellPosition(position);

  const isGridEdge = Number(cellPosition.column) % 3 === 0;
  const isGridBottom = Number(cellPosition.row) % 3 === 0;
  console.log({ cellPosition }, { isGridEdge }, cellPosition.row, {
    isGridBottom,
  });
  return (
    <Container isGridEdge={isGridEdge} isGridBottom={isGridBottom}>
      {position}
    </Container>
  );
};
export default Cell;
