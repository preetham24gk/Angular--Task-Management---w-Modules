import { Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  @Input() user!: User
  @Input({required:true}) selected! : boolean;
  @Output() select = new EventEmitter<string>();
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectedUser(){
    this.select.emit(this.user.id);

  }

  }

