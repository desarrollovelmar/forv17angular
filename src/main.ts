import { Component } from '@angular/core';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  template: ` 
  <P><strong>INCORRECT RESULT ❌ V17</strong></P>

    @for(users of company; track users;let i = $index; let first = $first; let last = $last) {
      @if(first){
         <P>{{i+1}} OUTER LOOP FIRST</P>
      }
      @if(last){  
         <P>{{i+1}} OUTER LOOP LAST</P>
      }
      @for(user of users; track user.id;let j = $index; let first_ = $first; let last_ = $last) {
        @if(first){
         <P>{{i+1}} INNER LOOP FIRST</P>
        }
        @if(last){ 
         <P>{{i+1}} INNER LOOP LAST</P>
        }
      }
      <hr >
    }





      <hr >
      <hr >
      <hr > 
      <P><strong>CORRECT RESULT ✔️ V16</strong></P>
      <P>1 OUTER LOOP FIRST </P>
      <P>1 INNER LOOP FIRST</P>
      <P>1 INNER LOOP FIRST</P>
      <P>1 INNER LOOP FIRST</P>
      <P>1 INNER LOOP FIRST</P>
      <P>1 INNER LOOP FIRST</P>
      <hr >
      <P>2 OUTER LOOP LAST </P>
      <P>2 INNER LOOP LAST </P> 
      <P>2 INNER LOOP LAST </P> 
      <P>2 INNER LOOP LAST </P> 
      <P>2 INNER LOOP LAST </P> 
      <P>2 INNER LOOP LAST </P> 
      <hr >
      <hr >
      <P> ✔️✔️✔️✔️✔️ ✔️ V16</P>
      <hr >
      <hr >
      <P> CODE </P> 
      <hr >
      <hr >
      <ng-container *ngFor="let users of  company,  let i = index, let first = first; let last = last;">
      @if(first){
         <P>{{i+1}} OUTER LOOP FIRST</P>
      }
      @if(last){  
         <P>{{i+1}} OUTER LOOP LAST</P>
      }
      <ng-container *ngFor="let usuario of  users,  let j = index, let first_ = first; let last_ = last;">
        @if(first){
         <P>{{i+1}} INNER LOOP FIRST</P>
        }
        @if(last){ 
         <P>{{i+1}} INNER LOOP LAST</P>
        }
         </ng-container>
      <hr >
       </ng-container>
  `,
})
export class App {
  name = 'Angular';
  company = [
    [
      { id: 0, name: '1' },
      { id: 1, name: '2' },
      { id: 2, name: '3' },
      { id: 3, name: '4' },
      { id: 4, name: '5' },
    ],
    [
      { id: 0, name: '6' },
      { id: 1, name: '7' },
      { id: 2, name: '8' },
      { id: 3, name: '9' },
      { id: 4, name: '10' },
    ],
  ];
}

bootstrapApplication(App);
