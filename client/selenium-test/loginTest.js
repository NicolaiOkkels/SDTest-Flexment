const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require("chromedriver");

async function login(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000/tasks");

    await driver.findElement(By.name('login')).click();
    await driver.findElement(By.name("email")).sendKeys("test2@test.dk");
    await driver.findElement(By.name("password")).sendKeys("1");
    await driver.findElement(By.name("submit")).click();

    setInterval(function (){
        driver.quit();
    }, 10000);
}

login();