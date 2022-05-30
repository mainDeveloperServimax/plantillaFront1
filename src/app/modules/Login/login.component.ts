import { LABELS } from 'src/app/constants/labels.constans';
import { MAIN_REDIRECTIONS_BY_ROLE } from './../../constants/mainRedirections.constans';
import { ToastService } from '../../services/internal/toast.service';
import { LoginService } from '../../services/login.service';
import { StorageService } from '../../services/internal/storage/storage.service';
import { RoutesApp } from '../../constants/routes-app.constants';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private router: Router,
    private storageServices: StorageService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private loginService: LoginService,
    private toastService: ToastService) { }

  ngOnInit(): void {
    this.initForm();

  }
  private initForm() {
    this.loginForm = this.fb.group({
      user: [null, Validators.required],
      passWord: [null, Validators.required]
    });
  }

  private goHome(roleId: number): void {
    const redirectTo = MAIN_REDIRECTIONS_BY_ROLE[roleId];
    this.router.navigate(redirectTo);

  }

  public loginUser() {
    this.spinner.show();
    this.loginService.loginPerson('CC', this.loginForm.value.user, this.loginForm.value.passWord).subscribe((result) => {
      this.spinner.hide();
      this.toastService.openToast({ type: 'Success' });
      this.storageServices.saveStorageElement({ space: 'Session', typeElement: 'user', element: result.response });
      this.storageServices.saveStorageElement({ space: 'Session', typeElement: 'currentRole', element: result.response.roles[0].id });
      this.goHome(result.response.roles[0].id);
    }, (error) => {
      this.spinner.hide();
      this.toastService.openToast({ type: 'Error', msg: error?.error?.message });
    });
  }

  public validateButton(): boolean {
    return this.loginForm.valid;
  }

}
