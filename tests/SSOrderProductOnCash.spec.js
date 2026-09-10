import {test} from "@playwright/test"
import welcomeSS from "../POM/Welcome_SS.js"
import LoginSSL from "../POM/Login_SSL.js"
import HomeSS from "../POM/HomePage_SS.js"
import AddProductSS from "../POM/AddProduct_SS.js"
import PaymentMethodSS from "../POM/PaymentMethod_SS.js"
import LoginSSLddt from "../Data Driven Testing/SSLogin.json"


test.only("SSL login using pom & DDT",async({page})=>{
    let welcomeSSPageObj=new welcomeSS(page);    
    let loginSSLObj=new LoginSSL(page);
    let HomeSSPageObj=new HomeSS(page);
    let AddProductobj=new AddProductSS(page);
    let PaymentMethodObj=new PaymentMethodSS(page);
    let url=LoginSSLddt.url;
    let usn=LoginSSLddt.username;
    let pwd=LoginSSLddt.password;
    await page.goto(url);

    //Welcome page
    await welcomeSSPageObj.LoginPageEnteringButton.click();
    //Login page
    await loginSSLObj.EmailTextBoxf.fill(usn);
    await loginSSLObj.PasswordTextBoxf.fill(pwd);
    await page.waitForTimeout(1000);
    await loginSSLObj.SubmitLoginButton.click();
    await page.waitForTimeout(1000);
    //Home page
    await HomeSSPageObj.Searchboxf.fill("shirt");
    await HomeSSPageObj.searchbutton.click();
    await page.waitForTimeout(1000);
    //Add Product page
    await AddProductobj.AddtoCartButton.click();
    await page.waitForTimeout(1000);
    await AddProductobj.cartIcon.click();
    await page.waitForTimeout(1000);
    await AddProductobj.BuyNowButton.click();
    await page.waitForTimeout(1000);
    await AddProductobj.AddressRadioButton.check();
    await page.waitForTimeout(1000);
    await AddProductobj.AddressProceedButton.click();
    await page.waitForTimeout(1000);
    //Payment Page
    await PaymentMethodObj.CODRadioButton.check();
    await page.waitForTimeout(1000);
    await PaymentMethodObj.PaymentProceedButton.click();
    await page.waitForTimeout(3000);
})