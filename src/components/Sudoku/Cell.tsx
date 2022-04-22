import React from "react";

import { decodeCellPosition } from "../../utils";
import miracleSudoku from "../../sudokus/miracleSudoku.json";

import { Container, CellValue } from "./Sudoku.styles";

interface IProps {
  position: string;
}

interface Sudoku {
  [key: string]: {
    answer: number;
    value: number | null;
    startingValue: number | null;
  };
}
const Cell = ({ position }: IProps) => {
  const cellPosition = decodeCellPosition(position);

  const isGridEdge = Number(cellPosition.column) % 3 === 0;
  const isGridBottom = Number(cellPosition.row) % 3 === 0;

  const sudoku: Sudoku = miracleSudoku;
  console.log(sudoku[position], { position });
  return (
    <Container isGridEdge={isGridEdge} isGridBottom={isGridBottom}>
      <CellValue isStartingValue={!!sudoku[position].startingValue}>
        {sudoku[position].startingValue}
      </CellValue>
    </Container>
  );
};
export default Cell;
