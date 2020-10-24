import { Component, Input, OnInit } from '@angular/core';
import { PointModel } from 'src/app/models/point-model.model';

@Component({
  selector: 'app-answerrow',
  templateUrl: './answerrow.component.html',
  styleUrls: ['./answerrow.component.scss']
})
export class AnswerrowComponent implements OnInit {

  @Input() Answer:PointModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
