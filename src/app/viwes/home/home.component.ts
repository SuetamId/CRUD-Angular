
import { UserService } from './../../service/user.service';
import { User } from './../../model/user';

import { Component} from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  users$:Observable< User[]>;

  displayedColumns: string[] = ['Id', 'Nome', 'Idade', 'Cpf','Actions'];


  constructor (
    private userService: UserService,
    public dialog: MatDialog
    ) {

    this.users$ = this.userService.getUsers().
    pipe(
      catchError(error =>{
        this.onError('Ops algo de errado aconteceu :(')
        return of([])
      })
    );


  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  ngOnInit(): void {

  }

}
function openDialog(errorMsg: any, string: any) {
  throw new Error('Function not implemented.');
}

