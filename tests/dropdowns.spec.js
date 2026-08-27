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
test("Multiple select",async ({page}) => {
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

//* Custom dropdown
//* 1st way to handle using locator/xpath
test("Custom dropDown",async ({page}) => {
    await page.goto("https://www.amazon.in/s?k=shirt&crid=36FPBD72IBD7U&sprefix=shirt%2Caps%2C262&ref=nb_sb_noss_2");
    await page.waitForSelector("span[id='a-autoid-0-announce']",{state:"attached"});
    await page.locator("span[id='a-autoid-0-announce']").click();
    await page.waitForTimeout(3000);
    await page.locator("a[id='s-result-sort-select_4']").click();
    await page.waitForTimeout(3000);
})

//* 2st way to handle using through iteration
test.only("Custom dropDown through itr",async ({page}) => {
    await page.goto("https://www.amazon.in/s?k=shirt&crid=36FPBD72IBD7U&sprefix=shirt%2Caps%2C262&ref=nb_sb_noss_2");
    await page.locator("span[id='a-autoid-0-announce']").click();
    await page.waitForSelector("a[class='a-dropdown-link']");
    // await page.locator("a[class='a-dropdown-link']").first().waitFor();
    let options=await page.locator("a[class='a-dropdown-link']").all(); //!return the locator of all the common elements
    for(let option of options)
    {
        let text=await option.textContent();
        if(text.includes("Newest"))
        {
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(3000);
})
