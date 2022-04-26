import React, { useState } from "react";

import { decodeCellPosition } from "../../utils";
import miracleSudokuJson from "../../sudokus/miracleSudoku.json";

import { CellValue } from "./Sudoku.styles";

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
  const miracleSudoku: Sudoku = miracleSudokuJson;
  const [sudoku, updateSudoku] = useState(miracleSudoku);
  const cellPosition = decodeCellPosition(position);

  const isGridEdge = Number(cellPosition.column) % 3 === 0;
  const isGridBottom = Number(cellPosition.row) % 3 === 0;

  return (
    <CellValue
      isGridEdge={isGridEdge}
      isGridBottom={isGridBottom}
      isStartingValue={!!sudoku[position].startingValue}
      name={position}
      type="text"
      maxLength={1}
      min={1}
      max={9}
      value={sudoku[position].startingValue || sudoku[position].value || ""}
      incorrectValue={
        !!sudoku[position].value &&
        sudoku[position].value !== sudoku[position].answer
      }
      onChange={(e) => {
        updateSudoku({
          ...sudoku,
          [position]: {
            ...sudoku[position],
            value: Number(e.target.value),
          },
        });
      }}
    ></CellValue>
  );
};
export default Cell;
