class framePage{
    constructor(page){
        //iframe Switch - ICD
        this.frame1=page.frameLocator("iframe[src*='select-bank']");
        this.ICD=this.frame1.locator("input[value='ICD']");
        this.choosePayment=this.frame1.getByRole('button',{name:"Submit"});
        //netbanking frame
        this.frame2=page.frameLocator("iframe[src*='select-bank']").frameLocator("iframe[src*='net-banking-login']");
        this.icdusrTextBox=this.frame2.locator("label[id='User ID-label']");
        this.icdpwdTextBox=this.frame2.locator("input[id='Password']");
        this.netbankingSubmit=this.frame2.getByRole('button',{name:"Submit"})

        //pay Now frame
        this.frame3=this.frame2.frameLocator("iframe[src*='pay-amount-frame']").frameLocator("iframe[src*='pay-amount']");
        this.paynowButton=this.frame3.getByRole("button",{name:"Pay Now"});
    }
}
export default framePage