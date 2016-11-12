export interface Block {
  x: number,
  y: number,
  shape: number[][],
  color: string,
}

export const blocks = [
  {
    x: 5,
    y: 0,
    shape: [
      [1, 1],
      [1, 1],
    ],
  }, {
    x: 5,
    y: 0,
    shape: [
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 0, 0],
    ],
  }, {
    x: 5,
    y: 0,
    shape: [
      [0, 0, 0, 0],
      [0, 3, 3, 0],
      [0, 3, 0, 0],
      [0, 3, 0, 0],
    ],
  }, {
    x: 5,
    y: 0,
    shape: [
      [0, 0, 0, 0, 0],
      [0, 0, 4, 0, 0],
      [0, 4, 4, 4, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  }
];
