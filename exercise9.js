function calculateMatrixSum(matrix) {
  return matrix.reduce(
    (acc, row) => acc + row.reduce((sum, num) => sum + num, 0),
    0
  );
}
