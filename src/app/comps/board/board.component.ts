import { Component, OnInit } from '@angular/core';
import { BoardModel } from 'src/app/models/board-model.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board:BoardModel;

  constructor() { }

  ngOnInit(): void {
    this.board = new BoardModel(10, 4);
  }

}
