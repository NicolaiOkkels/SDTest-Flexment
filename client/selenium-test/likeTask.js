const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require("chromedriver");

async function likeTask(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000/tasks");

    //Login
    await driver.findElement(By.name('login')).click();
    await driver.findElement(By.name("email")).sendKeys("test2@test.dk");
    await driver.findElement(By.name("password")).sendKeys("1");
    await driver.findElement(By.name("submit")).click();

    await driver.wait(until.elementLocated(By.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall'][1]")), 10000).click();

    setInterval(function (){
        driver.quit();
    }, 10000);
}

likeTask();