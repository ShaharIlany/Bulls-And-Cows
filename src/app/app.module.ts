import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameComponent } from './pages/game/game.component';
import { BoardComponent } from './comps/board/board.component';
import { GuessrowComponent } from './comps/guessrow/guessrow.component';
import { PointComponent } from './comps/point/point.component';
import { AnswerrowComponent } from './comps/answerrow/answerrow.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    GuessrowComponent,
    PointComponent,
    AnswerrowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
