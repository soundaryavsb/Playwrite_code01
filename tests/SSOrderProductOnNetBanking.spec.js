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
    let icdusr=LoginSSLddt.icdUsername;
    let icdpwd=LoginSSLddt.icdPassword;

    await page.setDefaultTimeout(5000);
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
    await HomeSSPageObj.Searchboxf.fill("shirt");
    await HomeSSPageObj.searchbutton.click();
    // await page.waitForTimeout(1000);
    //Add Product page
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
    // let frame1=page.frame({url:"https://shoppersstack.com/select-bank?total=1098"});
    console.log("frame count: "+await page.locator("iframe").count());
    let frame1=page.frameLocator("iframe[src*='select-bank']");
    //ICD radio button
    await frame1.locator("input[value='ICD']").check();
    await page.waitForTimeout(1000);
    //submit button
    await frame1.getByRole('button',{name:"Submit"}).click();
    await page.waitForTimeout(3000);
    //netbanking frame
//     console.log(
//     await page
//         .locator("iframe[src*='select-bank']")
//         .contentFrame()
//         .locator("iframe")
//         .evaluateAll(frames =>
//             frames.map(frame => frame.getAttribute("src"))
//         )
// );
    let frame2=page.locator("iframe[src*='net-banking-login']");
    await page.waitForTimeout(1000);
//     console.log("Input count:", await frame2.locator("input").count());
//     console.log("Button count:", await frame2.locator("button").count());
//     console.log("Body text:", await frame2.locator("body").innerText());
//     console.log(
//     await frame2.locator("label[id='User ID-label']").count()
// );
    console.log("icdusr: "+icdusr);
    console.log("icdusr: "+icdpwd);
    await frame2.locator("label[id='User ID-label']").fill(icdusr);
    await page.waitForTimeout(1000);
    await frame2.locator("input[id='Password']").fill(icdpwd);
    await page.waitForTimeout(1000);
    await frame2.getByRole('button',{name:"Submit"}).click();
    await page.waitForTimeout(3000);


})