import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent implements OnInit{

  title = 'Dating App';
  users: any;
  constructor(private http : HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://localhost:5138/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => {
        console.log("Request Successful")
      }
    }) 
  }
  
}
