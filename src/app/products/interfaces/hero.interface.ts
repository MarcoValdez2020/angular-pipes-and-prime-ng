export enum Color {
  red, black, blue, green, grey
}


export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
