import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {FormControl, Validators} from "@angular/forms";
import {getErrorMessage} from "codelyzer/templateAccessibilityElementsContentRule";
import {ActivatedRoute,  Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  searchValue ="";
  searchResults = {};
  isSearchResult=false;
  searchForm = new FormControl('');
  questionForm = new FormControl('');

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Вы должны ввести значение';
    }

    return this.email.hasError('email') ? 'Неверный адрес электронной почты' : '';
  }

  setSearchValue(event : any){
    this.searchValue = event.target.value;
  }
}
