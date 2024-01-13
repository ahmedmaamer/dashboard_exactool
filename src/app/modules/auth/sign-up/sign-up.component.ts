import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
    selector     : 'sign-up-fullscreen',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignUpComponent implements OnInit
{
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

   
  signupForm: FormGroup;
  loginForm: FormGroup;

    /**
     * Constructor
     */
    constructor(
        private router: Router, 
        private formBuilder: FormBuilder,
        private authService: AuthService, 
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        
      this.signupForm = this.formBuilder.group({
        fullName: [''],
        email: [''],
        password: [''],
      });
      this.loginForm = this.formBuilder.group({
        email: [''],
        password: [''],
    })
    }
    
    get fullName() {
      return this.signupForm.get('fullName');
    }
    
    get email() {
      return this.signupForm.get('email');
    }
    
    get password() {
      return this.signupForm.get('password');
    }

    register() {
        if (this.signupForm.invalid) {
          return;
        }
        this.authService.register(this.signupForm.value).subscribe(() => {
        });
      }
  
      login(){
        if (this.loginForm.invalid) {
          return;
        }
  
        const { email, password } = this.loginForm.value;
        this.authService.login({email,password}).subscribe((response: any) => {
  
          localStorage.setItem('access_token',response.access_token);
          this.router.navigate(['/dashboard/project']); //route when login
        })
      }
}
