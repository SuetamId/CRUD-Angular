
import { UserService } from './../../service/user.service';
import { User } from './../../model/user';

import { Component} from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  users$:Observable< User[]>;

  displayedColumns: string[] = ['Id', 'Nome', 'Idade', 'Cpf','Actions'];


  constructor (private userService: UserService ) {

    this.users$ = this.userService.getUsers();
  }


  ngOnInit(): void {

  }

}
