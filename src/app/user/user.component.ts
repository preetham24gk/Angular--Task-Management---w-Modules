import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() user!: User
  @Input({required:true}) selected! : boolean;
  // @Input({required:true}) id!:string;

  // @Input({required:true}) avatar!: string;//avatar =input.requied<string>();
  // @Input({required:true}) name!:string;//name =input.requied<string>();
  @Output() select = new EventEmitter<string>();
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectedUser(){
    this.select.emit(this.user.id);

  }

  }

