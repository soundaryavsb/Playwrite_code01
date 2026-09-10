class homepageSS{
    constructor(page){
        this.Searchboxf=page.locator("input[id='search']");
        this.searchbutton=page.locator("svg[id='searchBtn']");
    }
}
export default homepageSS