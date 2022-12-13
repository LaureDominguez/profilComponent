export class Company {
  constructor(
    public id: number,
    public name: string,
    public siret: number,
    public account_type: string,
    public current_storage: number,
    public max_storage: number,
    public available_storage: number,
    public cvg_accepted: boolean,
    public current_users: number,
    public max_user: number,
    public suspended_at: number,
    public account_status: string,
    public date_subscribed: string,
    public bimcoins_quantity: number,
  ) {}
}
