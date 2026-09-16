import {expect, test} from "@playwright/test"

test("assertion",async ({page}) => {
  await page.goto("https://shoppersstack.com/");
  await page.waitForTimeout(3000);
  await expect.soft(page.locator("//h3[text()='Welcome to ShoppersStack. Enjoy shopping with us.']")).toHaveText("Welcome to ShoppersStack. Enjoy shopping with us.");

  await expect(page.locator("button[id='loginBtn']")).toBeEnabled();
  await page.locator("button[id='loginBtn']").click();
  
  await expect(page.locator("//a[text()='Login']")).toContainText("Login"); //!Whole or partial text

  await expect(page.locator('input[id="Email"]')).toBeEditable();
  await page.locator('input[id="Email"]').fill("soya37jansi@gmail.com");

  await expect(page.locator('input[id="Password"]')).toBeEditable();
  await page.locator('input[id="Password"]').fill("Admin@123");

  await expect(page.locator('button[id="Login"]')).toBeEnabled();
  await page.locator('button[id="Login"]').click();

  await expect(page.locator("//a[text()='Home']")).toContainText("Home");
})