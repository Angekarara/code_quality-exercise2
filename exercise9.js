const calculateMatrixSum = (matrix) =>
  matrix.flat().reduce((acc, num) => acc + num, 0);
