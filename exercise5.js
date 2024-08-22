const calculateFactorial = (n) =>
  n === 0 || n === 1 ? 1 : n * calculateFactorial(n - 1);
