import {test} from "@playwright/test"
import testlogin from "../POM/Test_Login.js"
import testloginddt from "../Data Driven Testing/TALogin.json"
//*login with pom
test("Login Test automation website",async ({page}) => {
    let loginobj=new testlogin(page);
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    // await page.waitForTimeout(1000);
    await loginobj.usernamef.fill("student");
    // await page.waitForTimeout(1000);
    await loginobj.passwordf.fill("Password123");
    // await page.waitForTimeout(1000);
    await loginobj.submit.click();
    await page.waitForTimeout(3000);
})

//*login with pom & DDT
test.only("Login Test automation website with POM and DDT",async ({page}) => {
    let loginobj=new testlogin(page);
    let url=testloginddt.url;
    let usn=testloginddt.username;
    let pwd=testloginddt.password;
    await page.goto(url);
    // await page.waitForTimeout(1000);
    await loginobj.usernamef.fill(usn);
    // await page.waitForTimeout(1000);
    await loginobj.passwordf.fill(pwd);
    // await page.waitForTimeout(1000);
    await loginobj.submit.click();
    await page.waitForTimeout(3000);
})