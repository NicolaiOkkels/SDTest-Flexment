const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require("chromedriver");

async function searchTask(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000/tasks");

    //Login
    await driver.findElement(By.name('login')).click();
    await driver.findElement(By.name("email")).sendKeys("test2@test.dk");
    await driver.findElement(By.name("password")).sendKeys("1");
    await driver.findElement(By.name("submit")).click();

    await driver.wait(until.elementLocated(By.name("search")), 10000).sendKeys("hacking");
    await driver.findElement(By.name("searchTask")).click();

    await driver.wait(until.elementLocated(By.name("task")), 10000).click();

    setInterval(function (){
        driver.quit();
    }, 10000);
}

searchTask();