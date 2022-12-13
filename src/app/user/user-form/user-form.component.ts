import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnChanges {
  //input popup qui passe la valeur de false à true pour afficher du style dynamiquement
  @Input() popup: boolean = true;

  //input user qui contient la valeur de User récupérée depuis le serveur via userAccount et le service userAccountService
  @Input() user: User | undefined;

  //output formData qui contient les données entrées dans le formulaire à envoyer au parent userAccount
  @Output() formData = new EventEmitter<Partial<User>>();

  //tableau userForm construit depuis formBuilder et innitié avec les valeurs number, string et boleen
  protected userForm = this.fb.nonNullable.group({
    id: [0],
    email: [''],
    language: [''],
    first_name: [''],
    last_name: [''],
    phone: [0],
    job: [''],
    is_active: [true],
    company: [0],
    isAdmin: [false],
  });

  constructor(protected fb: FormBuilder) {}

  ngOnChanges(): void {
    
    //si user continet bien un valeur autre que undefined, alors lance l'instruction suivante
    if (this.user) {
      console.log('ici', this.user);
      //utilise la methode patchValue dans le formulaire userForm pour modifier les champs avec les valeurs récupérées de l'input user
      this.userForm.patchValue(this.user);
      this.userForm.get('email')?.disable();
    }
  }

  //methode sendData qui permet l'envoie des données de userForm via l'output formData vers le parent userAccount
  sendData() {
    if (this.user) {
      this.formData.emit(this.userForm.value);

      console.log('la', this.user);
    }
  }
}
