import { Color, PointModel } from './point-model.model';

export class BoardModel {
    public GuessPoints: PointModel[][];
    public rows:number;
    public cols:number;
    public Answer:PointModel[];
    public currRow:number;
    constructor(rows:number, cols:number){
        this.rows = rows;
        this.cols = cols;
        this.currRow = 0;
        this.GuessPoints = this.initializeGuessBoard();
        this.Answer = this.randomizeAnswer();
    }

    public initializeGuessBoard(){
        var matrix: PointModel[][] = [];
        for (var i = 0; i < this.rows; i++){
            matrix[i] = [];
            for (var j = 0; j < this.cols; j++){
                matrix[i][j] = new PointModel(i, j, Color.EMPTY);
            }
        }
        return matrix;
    }

    public randomizeAnswer(){
        var answerRow: PointModel[] = [];
        for (var j = 0; j < this.cols; j++){
            var random = Math.floor(Math.random() * Math.floor(8)) + 1;
            while (answerRow.find(point => point.color == random) != undefined){
                random = Math.floor(Math.random() * Math.floor(8)) + 1;
            }
            answerRow[j] = new PointModel(this.rows + 1, j, random);
        }

        return answerRow;
    }

    public makeAGuess(){
        var bulls = 0
        var cows = 0
        var GuessRow = this.GuessPoints[this.currRow];
        GuessRow.forEach(guessPoint =>{
            this.Answer.forEach(answerPoint =>{
                if (guessPoint.col == answerPoint.col && guessPoint.color == answerPoint.color){
                    bulls++;
                }else if (guessPoint.color == answerPoint.color){
                    cows++;
                }
            })
        })

        console.log("Bulls: " + bulls + " Cows: " + cows)
        this.currRow++;
    }

}
