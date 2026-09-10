import {test} from "@playwright/test"
import welcomeSS from "../POM/Welcome_SS.js"
import LoginSSL from "../POM/Login_SSL.js"
import HomeSS from "../POM/HomePage_SS.js"
import AddProductSS from "../POM/AddProduct_SS.js"
import PaymentMethodSS from "../POM/PaymentMethod_SS.js"
import LoginSSLddt from "../Data Driven Testing/SSLogin.json"
import framePage from "../POM/frame_SS.js"


test.only("SSL login using pom & DDT",async({page})=>{
    let welcomeSSPageObj=new welcomeSS(page);    
    let loginSSLObj=new LoginSSL(page);
    let HomeSSPageObj=new HomeSS(page);
    let AddProductobj=new AddProductSS(page);
    let PaymentMethodObj=new PaymentMethodSS(page);
    let framePageObj=new framePage(page);
    let url=LoginSSLddt.url;
    let usn=LoginSSLddt.username;
    let pwd=LoginSSLddt.password;
    let icdusr=LoginSSLddt.icdUsername;
    let icdpwd=LoginSSLddt.icdPassword;

    // await page.setDefaultTimeout(10000);
    await page.goto(url);

    //Welcome page
    await welcomeSSPageObj.LoginPageEnteringButton.click();
    //Login page
    await loginSSLObj.EmailTextBoxf.fill(usn);
    await loginSSLObj.PasswordTextBoxf.fill(pwd);
    // await page.waitForTimeout(1000);
    await loginSSLObj.SubmitLoginButton.click();
    // await page.waitForTimeout(1000);
    //Home page
    // await HomeSSPageObj.Searchboxf.fill("shirt");
    // await HomeSSPageObj.searchbutton.click();
    await page.waitForTimeout(1000);
    await HomeSSPageObj.MenSession.hover();
    await page.waitForTimeout(1000);
    await HomeSSPageObj.TShirtSession.click();
    await page.waitForTimeout(1000);
    //Add Product page
    // await page.waitForSelector("(//button[text()='add to cart'])[1]");
    await AddProductobj.AddtoCartButton.hover();
    await AddProductobj.AddtoCartButton.click();
    // await page.waitForTimeout(1000);
    await AddProductobj.cartIcon.click();
    // await page.waitForTimeout(1000);
    await AddProductobj.BuyNowButton.click();
    // await page.waitForTimeout(1000);
    await AddProductobj.AddressRadioButton.check();
    // await page.waitForTimeout(1000);
    await AddProductobj.AddressProceedButton.click();
    // await page.waitForTimeout(1000);
    //Payment Page
    await PaymentMethodObj.NetBankingRadioButton.check();
    await page.waitForTimeout(1000);
    await PaymentMethodObj.PaymentProceedButton.click();
    await page.waitForTimeout(1000);
    //iframe Switch - ICD
    // let frame1=page.frameLocator("iframe[src*='select-bank']");
    let frame1=framePageObj.frame1;
    //ICD radio button
    await framePageObj.ICD.check();
    await page.waitForTimeout(1000);
    //submit button
    await framePageObj.choosePayment.click();
    await page.waitForTimeout(3000);
  
    //netbanking frame
    let frame2=framePageObj.frame2;
    await page.waitForTimeout(1000);

    await framePageObj.icdusrTextBox.fill(icdusr);
    await page.waitForTimeout(1000);
    await framePageObj.icdpwdTextBox.fill(icdpwd);
    await page.waitForTimeout(1000);
    await framePageObj.netbankingSubmit.click();
    await page.waitForTimeout(3000);

    //pay Now frame
    let frame3=framePageObj.frame3;
    await framePageObj.paynowButton.click();
    await page.waitForTimeout(3000);
})