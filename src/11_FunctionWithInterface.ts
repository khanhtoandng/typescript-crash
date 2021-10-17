interface MathFunc {
  (x: number, y: number): number;
}

const addIInterface: MathFunc = (x: number, y: number): number => x + y;
