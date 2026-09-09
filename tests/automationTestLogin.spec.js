import {test} from "@playwright/test"
import testlogin from "../POM/Test_Login.js"

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