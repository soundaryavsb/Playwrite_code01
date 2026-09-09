import {test} from "@playwright/test"
import LoginSSL from "../POM/Login_SSL.js"

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