import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any;
  password: any;
  private user: any;

  constructor(
    private service: LoginServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: any) {
    this.service.verifier(loginForm.login, loginForm.password)
      .subscribe(
        (data: any) => {
          this.user = data
          if (data != null) {
            if (this.user.etat === "non_disponible") {
              console.log("Compte desactiver");
              
            } else {
              localStorage.setItem('userData', JSON.stringify(data))
              this.route.navigateByUrl('accueil');
              console.log(this.user.nom);
              
            }
          } else {
            console.log("login ou mot de passe incorrect");
            
          }
        }
      )
  }

}
