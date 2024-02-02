import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Admin/models/user.model';
import { AuthService } from 'src/app/Admin/services/auth.service';

@Component({
  selector: 'SSS-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user?: User;

  constructor(  private authservice : AuthService,
    private router : Router)
  {

  }



  ngOnInit(): void {
    this.authservice.user().
    subscribe({
        next: (response) => {
          //console.log(response);
          this.user = response;
        }
      });
      this.user = this.authservice.getUser();
  }

  onLogout() : void{
    this.authservice.logout();
    this.router.navigateByUrl("/MainHome");
  }

}
