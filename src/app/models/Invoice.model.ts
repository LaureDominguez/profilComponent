export class Invoice {
  constructor(
    public id: number,
    public billing_reason: string,
    public amount_paid: number,
    public amount_due: number,
    public hosted_invoice_url: string,
    public invoice_pdf: string,
    public auto_advance: boolean,
    public status: string,
    public bimcoins_quantity: number,
    public created: number,
  ) {}
}
