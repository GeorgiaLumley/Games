import Row from "./Row";

const Sudoku = () => {
  const columns = 9;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {[...Array(columns)].map((e, index) => (
        <Row rowIndex={index + 1} />
      ))}
    </div>
  );
};

export default Sudoku;
