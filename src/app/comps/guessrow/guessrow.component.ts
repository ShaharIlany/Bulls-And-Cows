import { Component, Input, OnInit } from '@angular/core';
import { BoardModel } from 'src/app/models/board-model.model';
import { Color, PointModel } from 'src/app/models/point-model.model';
import { NumericLiteral } from 'typescript';

@Component({
  selector: 'app-guessrow',
  templateUrl: './guessrow.component.html',
  styleUrls: ['./guessrow.component.scss']
})
export class GuessrowComponent implements OnInit {

  @Input() GuessRow:Array<PointModel>;
  @Input() Board:BoardModel;
  @Input() Index:number;

  constructor() { }

  ngOnInit(): void {
  }

  guessClick(){
    this.Board.makeAGuess();
  }

  allSpotsMarked(){
    var ThereIsEmpty = false
    this.GuessRow.forEach(point => {
      if (point.color == Color.EMPTY){
        ThereIsEmpty = true;
      }
    });
    return !ThereIsEmpty;
  }

  buttonStatus(){
    if (this.Board.currRow == this.Index){
      if (this.allSpotsMarked()){
        return false;
      }
      else{
        return true;
      }
    }else{
      return true;
    }
    
  }

}
