import {test} from "@playwright/test"
import SSLloginCredential from "../Data Driven Testing/SSLogin.json"
import SSLloginMultiCredential from "../Data Driven Testing/SSLLoginJsonMultipledata.json"

//*Single data from json
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

//*Multiple data from json
test.only("SSL Login Mutiple data from json",async ({page}) => {
    for(let data of SSLloginMultiCredential){
    let url=data.url;
    let username=data.username;
    let password=data.password;
    await page.goto(url);
    await page.getByRole("button",{name:"Login"}).click();
    await page.getByRole("textbox",{name:"Email"}).fill(username);
    await page.getByRole("textbox",{name:"Password"}).fill(password);
    await page.waitForTimeout(2000);
    await page.getByRole("button",{name:"Login"}).click();
    // await page.waitForTimeout(3000);
    let AfterLogin=page.locator('button[aria-label="Account settings"]').isVisible();
    console.log("After Login Button:"+AfterLogin);
    
    if(AfterLogin)
    {
    await page.locator('button[aria-label="Account settings"]').click({timeout:2000});
    await page.getByText("Logout").click();
    // await page.waitForTimeout(2000);
    }
    }
})