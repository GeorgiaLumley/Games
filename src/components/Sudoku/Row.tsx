import React from "react";

import Cell from "./Cell";

import { GridRow } from "./Sudoku.styles";

interface IProps {
  rowIndex: number;
}
const Row = ({ rowIndex }: IProps) => {
  const cells = 9;
  return (
    <GridRow>
      {[...Array(cells)].map((e, index) => (
        <Cell position={`${index + 1}:${rowIndex}`} key={index} />
      ))}
    </GridRow>
  );
};

export default Row;
