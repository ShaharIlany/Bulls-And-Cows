export class PointModel {
    public color: Color;
    public row:number;
    public col:number;

    constructor(row:number, col:number, color:Color){
        this.row = row;
        this.col = col;
        this.color = color;
    }
}

export enum Color{
    EMPTY = 0,
    Red = 1,
    Green = 2,
    Blue = 3,
    Orange = 4,
    Yellow = 5,
    Purple = 6,
    White = 7,
    Pink = 8
}
