export class LoginPage{
    constructor(page){
        this.page=page;
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.loginButton = page.locator('//input[@id="login"]')
    }
    async LaunchUrl(){
        await this.page.goto('https://adactinhotelapp.com/')
    }              
    async enterusername(){
        await this.username.fill('keerthi19')
    }
     async enterpassword(){
        await this.password.fill('Keerthi@123') 
    }
     async clickloginbutton(){
        await this.loginButton.click()
     }

}