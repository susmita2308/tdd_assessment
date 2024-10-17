import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  title = 'tddAssignment';
  number1: number = 0;
  number2: number = 0;
  sum: number | null = null;
  constructor() {
  }

  ngOnInit() {
    
  }
}


