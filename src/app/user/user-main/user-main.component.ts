import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { PopUpPasswordComponent } from '../pop-up-password/pop-up-password.component';
import { PopUpUserComponent } from '../pop-up-user/pop-up-user.component';
import { DBService } from 'src/app/services/db.service';
@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css'],
})
export class UserMainComponent implements OnInit {
  protected userData: User | undefined;

  protected getUser$: Observable<User> = this.DBService.getCurrentUserInfo();

  constructor(protected DBService: DBService, protected dialog: MatDialog) {}

  ngOnInit(): void {
    //lance la methode getUserInfo() depuis l'alias de mon service et y souscrit pour pouvoir écouter User
    this.getUser$.subscribe({
      //une fois que la souscription a eu lieu, récupère les valeurs de User dans la variable data
      next: (data) => {
        //transmet la valeur de data à userData qui permettra de transmettre les infos sur l'input "user" de userForm
        this.userData = data;
      },
    });
  }

  //methode de MatDialog permettant d'ouvrir la page popupUser dans un popup
  openUserDialog(): void {
    //declaration et utilisation de la variable dialogRef avec la methode open() pour ouvrir le popup
    const dialogRef: MatDialogRef<PopUpUserComponent> = this.dialog.open(PopUpUserComponent, {
      width: '70vh',
      data: { user: this.userData },
    });

    // souscription à la methode afterClosed() pour envoyer un message lorsque la fenetre popup sera fermée
    dialogRef
      .afterClosed()
      .pipe(filter((data : User) => data !== undefined))
      .subscribe((data) => {
        this.DBService.patchUserInfo(data);
        this.getUser$.subscribe({
          next: (data) => {
            //transmet la valeur de data à userData qui permettra de transmettre les infos sur l'input "user" de userForm
            this.userData = data;
          },
        });
      });
  }

  //meme chose avec le lien popupPassword
  // !!!! pas terminé !!!!!
  openPasswordDialog(): void {
    const dialogRef = this.dialog.open(PopUpPasswordComponent, {
      width: '50vh',
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }
}
