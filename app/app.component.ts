import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  votes: number;

constructor( ) {
	}
 onIncrement(): void {
 this.votes += 1;
 }

 onDecrement(): void {
 this.votes -= 1;
 }

}
