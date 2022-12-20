const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require("chromedriver");

async function createTask(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000/tasks");

    //Login
    await driver.findElement(By.name('login')).click();
    await driver.findElement(By.name("email")).sendKeys("test2@test.dk");
    await driver.findElement(By.name("password")).sendKeys("1");
    await driver.findElement(By.name("submit")).click();

    await driver.wait(until.elementLocated(By.name("taskName")), 10000).sendKeys("Hacking for secure applications");
    await driver.findElement(By.name("taskDescription")).sendKeys("This is a exercise to see if the company has any security breaches");
    await driver.findElement(By.name("programmingLanguages")).sendKeys("C#, Security, Hacking, SecureApplications");
    await driver.findElement(By.name("addTask")).click();

    setInterval(function (){
        driver.quit();
    }, 10000);
}

createTask();