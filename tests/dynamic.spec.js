import { test } from '@playwright/test'

test('Window Handling', async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone air')
    await page.keyboard.press('Enter')

    const [newPage] = await Promise.all([context.waitForEvent('page'),
    page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_0"]//following-sibling::div[@role="listitem"]//descendant::h2[contains(@aria-label,"Sponsored Ad - iPhone Air 1 TB: Thinnest iPhone Ever, 16.63 cm (6.5″)")]')
    ])

    await newPage.waitForLoadState()

    const title = await newPage.title()
    console.log(title)

})


// dynamic XPath Relationships

//parent::(The immediate upper element)
//child::(The immediate lower element)
//ancestor::(Any upper-level element (parent, grandparent, etc.).
//descendant::(Any lower-level element (child, grandchild, etc.).
//following-sibling::(The next element at the same level)
//preceding-sibling::(The previous element at the same level)