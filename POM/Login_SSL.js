class loginSS{
    constructor(page)
    {
        this.LoginButtonf=page.getByRole("button",{name:"Login"});
        this.EmailTextBoxf=page.getByRole("textbox",{name:"Email"});
        this.PasswordTextBoxf=page.getByRole("textbox",{name:"Password"});
        this.SubmitLoginButton=page.getByRole("button",{name:"Login"});
    }
}
export default loginSS