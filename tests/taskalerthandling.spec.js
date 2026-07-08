import {test} from '@playwright/test'
test('alert handling',async({page}) =>{
await page.goto('https://testautomationpractice.blogspot.com/')

//simple alert
await page.once('dialog',async(dialog) =>{
    await dialog.accept()
    console.log("simple alert:",dialog.message())
})
await page.locator('//button[@id="alertBtn"]').click()
 
// confirmation alert
// await page.locator ('//button[@id="alertBtn"]').click()

await page.once('dialog',async(dialog) =>{
    await dialog.accept()
    console.log("confirmation alert:",dialog.message())
})
    
await page.locator('//button[@id="confirmBtn"]').click()
// prompt alert 

 await page.once('dialog',async(dialog) =>{
    await dialog.accept('hi bro')
    console.log("prompt alert:",dialog.message())
 })

await page.locator('//button[@id="promptBtn"]').click()
})
