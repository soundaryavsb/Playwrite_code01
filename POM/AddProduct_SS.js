class addproduct{
    constructor(page){
        this.AddtoCartButton=page.locator("(//button[text()='add to cart'])[1]");
        this.cartIcon=page.locator('svg[id="cartIcon"]');
        this.BuyNowButton=page.getByRole('button',{name:"Buy Now"});
        this.AddressRadioButton=page.locator("input[name='address']");
        this.AddressProceedButton=page.getByRole('button',{name:"Proceed"});
    }
}
export default addproduct