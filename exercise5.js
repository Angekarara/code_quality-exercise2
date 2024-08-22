function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    var factorial = 1;
    for (var i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
