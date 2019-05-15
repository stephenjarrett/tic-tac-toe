import { SquareValues } from './../../enums';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  public squareArray: string[] = new Array(9).fill(SquareValues.Empty);
  public playerTurn = SquareValues.X;
  public xScore = 0;
  public yScore = 0;
  public drawScore = 0;
  public draw = false;
  public winner = null;


  constructor() { }

  ngOnInit() {
  }

  handleSquareClick(index: number) {
    // cannot make a move if there's a winner or a play in that square already
    if (!this.squareArray[index] && !this.winner && !this.draw) {
      this.squareArray[index] = this.playerTurn;

      if (this.isWinner()) {
        alert(`${this.playerTurn} wins!`);
        this.winner = true;
        this.addToWinTotal();
        return;
      }

      if (this.isDraw()) {
        alert('Draw!');
        this.drawScore++;
        this.draw = true;
        return;
      }

      if (this.playerTurn === SquareValues.X) {
        this.playerTurn = SquareValues.Y;
      } else {
        this.playerTurn = SquareValues.X;
      }
    }
  }

  isWinner(): boolean {
    let winningMove = false;
    const winningArrays = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    winningArrays.forEach((array: number[]) => {
      if (this.squareArray[array[0]] && // checks to make sure they aren't all blanks
        // check for winning match
        this.squareArray[array[0]] === this.squareArray[array[1]] &&
        this.squareArray[array[1]] === this.squareArray[array[2]]) {
        winningMove = true;
      }
    });
    return winningMove;
  }

  addToWinTotal(): void {
    if (this.playerTurn === SquareValues.X) {
      this.xScore++;
    } else {
      this.yScore++;
    }
  }

  isDraw(): boolean {
    if (this.squareArray.every(value => value !== SquareValues.Empty)) {
      return true;
    }
    return false;
  }

  handleNewRound(): void {
    this.draw = false;
    this.winner = null;
    this.squareArray.fill(SquareValues.Empty);
  }

  handleReset(): void {
    this.playerTurn = SquareValues.X;
    this.xScore = 0;
    this.yScore = 0;
    this.drawScore = 0;
    this.draw = false;
    this.winner = null;
    this.squareArray.fill(SquareValues.Empty);
  }

}

