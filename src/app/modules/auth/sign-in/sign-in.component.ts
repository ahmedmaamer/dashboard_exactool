import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
})
export class AuthSignInComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
  })
  }


  login(){
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService.login({email,password}).subscribe((response: any) => {

      localStorage.setItem('access_token',response.access_token);
      this.router.navigate(['/home-page']); //route when login
    })
  }
}
