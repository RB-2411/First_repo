const {base} = require ('@playwright/test');

base.test.extends({
testdataforder :{
    username = page.locator("#userEmail"),
    password = page.locator("#userPassword"),
    signIn   = page.locator("[value='Login']"),
}

})