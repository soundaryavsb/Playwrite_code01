class PaymentMethod{
    constructor(page){
        this.CODRadioButton=page.locator("input[value='COD']");
        this.NetBankingRadioButton=page.locator("input[value='Net Banking']");
        this.PaymentProceedButton=page.getByRole('Button',{name:"Proceed"});
    }
}
export default PaymentMethod