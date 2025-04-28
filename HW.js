function calculate(a, b, operation) {
    var result;
  
    if (operation === 'add') {
      result = a + b;
    } else if (operation === 'subtract') {
      result = a - b;
    } else if (operation === 'multiply') {
      result = a * b;
    } else if (operation === 'divide') {
      result = a / b;
    } else {
      return 'Invalid operation';
    }
  
    return result;
  }
  
  var num1 = 10;
  const num2 = 5;
  
  var additionResult = calculate(num1, num2, 'add');
  var subtractionResult = calculate(additionResult, num2, 'subtract');
  var multiplicationResult = calculate(subtractionResult, num2, 'multiply');
  var divisionResult = calculate(multiplicationResult, num2, 'divide');
  
  console.log('Addition :', additionResult);           
  console.log('Subtraction :', subtractionResult);     
  console.log('Multiplication :', multiplicationResult); 
  console.log('Division :', divisionResult);           
  