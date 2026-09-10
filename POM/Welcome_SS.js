class welcomeSS{
    constructor(page){
        this.LoginPageEnteringButton=page.getByRole("button",{name:"Login"});
    }
}
export default welcomeSS