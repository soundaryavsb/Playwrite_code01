class testlogin{
    constructor(page){
        this.usernamef=page.getByLabel("Username");
        this.passwordf=page.getByLabel("Password");
        this.submit=page.getByRole('button',{name:"Submit"});
    }
}
export default testlogin