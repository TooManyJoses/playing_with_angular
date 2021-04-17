import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  newUserName = '';
  removeUser = true;
  newUserMessage = 'Please enter a name';
  constructor() { }

  ngOnInit(): void {
  }

  onKeyPress(event: any) {
    this.newUserName = (<HTMLInputElement>event.target).value;
    if (this.newUserName) {
      this.removeUser = false;
      this.newUserMessage = 'Welcome ' + this.newUserName + ' we are happy to have you!'
    }
  }

  onRemoveUser() {
    this.newUserName = ''
    this.newUserMessage = 'Please enter a name';
  }
}
