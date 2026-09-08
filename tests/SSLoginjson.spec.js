import {test} from "@playwright/test"
import SSLloginCredential from "../Data Driven Testing/SSLogin.json"
test("d",async ({page}) => {
    let url=SSLloginCredential.url;
    let username=SSLloginCredential.username;
    let password=SSLloginCredential.password;
    await page.goto(url);
    await page.getByRole("button",{name:"Login"}).click();
    await page.getByRole("textbox",{name:"Email"}).fill(username);
    await page.getByRole("textbox",{name:"Password"}).fill(password);
    await page.waitForTimeout(2000);
    await page.getByRole("button",{name:"Login"}).click();
    await page.waitForTimeout(2000);
})