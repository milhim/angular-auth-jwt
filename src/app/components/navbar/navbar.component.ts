import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn = false;
  constructor(
    private authStatusService: AuthenticationService,
    private router:Router,
    private tokenService:TokenService,


  ) { }

  ngOnInit(): void {
    this.authStatusService.authStatus.subscribe(
      value=>this.loggedIn=value
    );
  }
  logout($event:MouseEvent){

      $event.preventDefault();
      this.tokenService.remove();
      this.authStatusService.changeAuthStatus(false);
    this.router.navigateByUrl('/login')
  }

}
