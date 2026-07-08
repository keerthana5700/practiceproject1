import {test} from '@playwright/test'
test ('validate frame',async({ page })=>{
await page.goto('https://demo.automationtesting.in/Frames.html')
const singleframe = await page.frameLocator('//iframe[@id="singleframe"]')
await singleframe.locator('//input[@type="text"]').fill('hii bro')

await page.locator('//a[text()="Iframe with in an Iframe"]').click()

const outerframe = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
const innerframe = await page.frameLocator('//iframe[@src="SingleFrame.html"]')
await innerframe.locator('//input[@type="text"]').fill('hii buddy')







//await page.waitForTime(3000)

})
