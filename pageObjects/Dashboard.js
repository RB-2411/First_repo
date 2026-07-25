class dashBoard{

constructor(page){
    this.page = page;
    this.productsText = page.locator(".card-body b");
    this.products = page.locator(".card-body");


}

async dashBoardPage(productName){
    await this.productsText.first().waitFor();
   const titles = await this.productsText.allTextContents();
   console.log(titles); 
   const count = await this.products.count();
   for(let i=0;i<count;++i){
    if(await this.products.nth(i).locator("b").textContent() === productName){
    await this.products.nth(i).locator("text= Add To Cart").highlight();
    await this.products.nth(i).locator("text= Add To Cart").click();
    break;
    }
   }
}

}
module.exports = {dashBoard};