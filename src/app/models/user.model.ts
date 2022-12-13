//Classe User qui correspond au model d'un utilisateur sur la bd
export class User {
  constructor(
    public id: number,
    public email: string,
    public language: string,
    public first_name: string,
    public last_name: string,
    public phone: number,
    public job: string,
    public is_active: boolean,
    public date_joined: number,
    public company: number,
    public isAdmin: boolean,
    public cgu_accepted: boolean,
    public isEmailValidated: boolean,
  ) {}
}
