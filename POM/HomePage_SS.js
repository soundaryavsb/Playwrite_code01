class homepageSS{
    constructor(page){
        this.Searchboxf=page.locator("input[id='search']");
        this.searchbutton=page.locator("svg[id='searchBtn']");
        this.MenSession=page.locator('a[id="men"]');
        this.TShirtSession=page.getByRole("link",{name:"T-shirts"});
    }
}
export default homepageSS