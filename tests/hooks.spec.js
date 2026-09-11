import {test} from "@playwright/test"

test.beforeAll("BeforeAll",async () => {
    console.log("BeforeAll");
})
test.afterAll("AfterAll",async () => {
    console.log("AfterAll");
})
test.beforeEach("BeforeEach",async () => {
    console.log("BeforeEach");
})
test.afterEach("AfterEach",async () => {
    console.log("AfterEach");
})
test("Test1",async()=>
{
    console.log("Test1");
})
test.only("Test2",async()=>
{
    console.log("Test2");
})