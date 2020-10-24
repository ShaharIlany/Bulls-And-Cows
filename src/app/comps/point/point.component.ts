import { Component, Input, OnInit } from '@angular/core';
import { BoardModel } from 'src/app/models/board-model.model';
import { Color, PointModel } from 'src/app/models/point-model.model';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  @Input() Point:PointModel;
  @Input() RowIndex:number;
  @Input() Board:BoardModel;

  constructor() { }

  ngOnInit(): void {
  }

  pointClicked(){
    var myRow = this.Board.GuessPoints[this.RowIndex];
    if (this.Board.currRow == this.RowIndex){
      this.Point.color = (this.Point.color + 1) % 9;
      while (this.containsColor(myRow, this.Point.color)){
        this.Point.color = (this.Point.color + 1) % 9;
      } 
    }
  }

  containsColor(row:Array<PointModel>, color:Color){
    var contains = false;
    if (color == Color.EMPTY){
      return false;
    }
    row.forEach(point =>{
      if (point.col != this.Point.col && point.color == color){
        contains = true;
      }
    })
    return contains;
  }

}
