export const decodeCellPosition = (position: string) => {
  const splitPosition = position.split(":");
  return { column: splitPosition[0], row: splitPosition[1] };
};
