import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private router: Router) {}

  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');
  }

  signOut(): void { // signout function
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }
}
