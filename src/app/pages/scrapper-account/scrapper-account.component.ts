import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ScreenscraperService} from "../../shared/services/screenscraper.service";

@Component({
  selector: 'app-scrapper-account',
  templateUrl: './scrapper-account.component.html',
  styleUrls: ['./scrapper-account.component.scss']
})
export class ScrapperAccountComponent implements OnInit {

  public formGroup: FormGroup | undefined;
  ssid: string | null = '';
  password: string | null = '';
  requestVerification = false;
  userInformationsValid : boolean | null = null;

  constructor(private formBuilder: FormBuilder, private screenscraperService: ScreenscraperService) {
  }

  ngOnInit(): void {

    this.ssid = localStorage.getItem('ssid');
    this.password = localStorage.getItem('password');


    this.formGroup = this.formBuilder.group({
      'ssid': [this.ssid, [Validators.required]],
      'password': [this.password, [Validators.required]],
    });
  }

  onSubmit(formValue: any): void {
    this.requestVerification = true;
    this.screenscraperService.checkUserAccount(formValue)
      .then((response) => {
        this.userInformationsValid = true;
        this.requestVerification = false;
        this.saveUserInformations(formValue);
      }).catch(() => {
        this.userInformationsValid = false;
      this.requestVerification = false;
    });
  }

  saveUserInformations(user: any){
    localStorage.setItem('ssid', user.ssid);
    localStorage.setItem('password', user.password);
  }

}
