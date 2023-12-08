export const getNumber = (value:number = 1) => {
  return value;
}

export const getString = (value:string = "Hello World") => {
  return value;
}

export const getObject = (value:object = {}) => {
  return value;
}

export const getSum = (num1: number, num2: number) => {
  if(num1 < 0 || num2 < 0) {
    throw new Error('Parameters should be positive.')
  }
  return num1 + num2;
}

export const outFunction = (num1: number, num2: number) => {
  const result = getSum(num1, num2);
  return result;
}