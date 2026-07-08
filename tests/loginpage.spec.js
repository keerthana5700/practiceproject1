import{test} from '@playwright/test'

test('validate practice',async({page}) => {
    await page.goto( 'https://practicetestautomation.com/practice-test-login/')
    await page.locator('//input[@id="username"]').fill('student')
    await page.locator('//input[@id="password"]').fill('password123')
    await page.locator('//button[text()="Submit"]').click()
})
