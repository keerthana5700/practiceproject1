import {test} from '@playwright/test'

test ('validate instagram',async({page}) => {
await page.goto('https://www.instagram.com/')
await page.locator('//input[@name="email"]').fill('keerthana')
await page.locator('//input[@name="pass"]').fill('password456')                                       
await page.locator('//span[text()="Log in"]').click()
})
