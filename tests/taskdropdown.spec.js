import {test} from '@playwright/test'

test ('validate form',async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('//input[@placeholder="Enter Name"]').fill('keerthana')
await page.locator('//input[@placeholder="Enter EMail"]').fill('keerthanaselvam@211.gmail.com')
await page.locator('//input[@placeholder="Enter Phone"]').fill('2728395620')
const singledrop = await page.locator('//select[@id="country"]')
    await singledrop.selectOption({index:2})
    await singledrop.selectOption({value:"japan"})
    await singledrop.selectOption({label: "Brazil" })
const text = await singledrop.locator('option:checked').textContent()
   console.log("selected country:",text)

const multidrop =await page.locator('//select[@id="colors"]') 
  await multidrop.selectOption([{index:3},{value:"white"},{label:"Green"}])
const text1 = await multidrop.locator('option:checked').allTextContents()
 console.log("selected colour:", text1)

})



