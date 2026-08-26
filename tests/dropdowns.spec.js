import {test} from "@playwright/test"

//* standard drop down
test("Standard select",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
    //* selecting through value
    //country
    await page.locator("select[id='select3']").selectOption({value:"India"});
    await page.waitForTimeout(3000);
    //* selectiing through label
    //state
    // await page.locator("select[id='select5']").selectOption({label:"Tamil Nadu"});
    // await page.waitForTimeout(3000);
    //* selecting through visible text
    await page.locator("select[id='select5']").selectOption("Tamil Nadu");
    await page.waitForTimeout(3000);
    //* selecting through index
    await page.locator("//label[text()='City']/following-sibling::select").selectOption({index:1}); //!using Xpath
    // await page.locator("select[class='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150']").nth(2).selectOption({index:1}); //!using CSS selector
    await page.waitForTimeout(3000);
})

//* Multiple drop down
test.only("Multiple select",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1");
    //select multiple option //!Note: store it in array
    await page.locator("select[id='select-multiple-native']")
            .selectOption([
                   {value:"Mens Casual Premium Slim Fit T-Shirts "},
                   {value:"Mens Cotton Jacket"}])
    //click add button
    await page.locator("button[class='bg-orange-500 p-2 text-white rounded w-[150px]']").click();
    await page.waitForTimeout(3000);

})
