import {test} from "@playwright/test"
import LoginSSL from "../POM/Login_SSL.js"
import LoginSSLddt from "../Data Driven Testing/SSLogin.json"

//* Login using POM
test("SSL login using pom",async({page})=>{
        let loginSSLObj=new LoginSSL(page);
        await page.goto("https://shoppersstack.com/");
        await loginSSLObj.LoginButtonf.click();
        await loginSSLObj.EmailTextBoxf.fill("soya37jansi@gmail.com");
        await loginSSLObj.PasswordTextBoxf.fill("Admin@123");
        await page.waitForTimeout(2000);
        await loginSSLObj.SubmitLoginButton.click();
        await page.waitForTimeout(2000);
})

//* Login using POM & DDT
test.only("SSL login using pom & DDT",async({page})=>{
        let loginSSLObj=new LoginSSL(page);
        let url=LoginSSLddt.url;
        let usn=LoginSSLddt.username;
        let pwd=LoginSSLddt.password;
        await page.goto(url);
        await loginSSLObj.LoginButtonf.click();
        await loginSSLObj.EmailTextBoxf.fill(usn);
        await loginSSLObj.PasswordTextBoxf.fill(pwd);
        await page.waitForTimeout(2000);
        await loginSSLObj.SubmitLoginButton.click();
        await page.waitForTimeout(2000);
})