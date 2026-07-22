// dropdown method
  // index--->{index:2}
  // value--->{value:"4"}
  //label--->{label:"mango"}---> view text 


  
import { test } from "@playwright/test"

test('validate dropdown',async({page}) => {
    await page.goto('https://letcode.in/dropdowns') 
    const singledrop = await page.locator('//select[@id="fruits"]')
    await singledrop.selectOption({index:2})
    await singledrop.selectOption({value:"1"})
    await singledrop.selectOption({label:"Mango"})
    const text = await singledrop.locator('option:checked').textContent()
    console.log("selected:",text)
    
    const multidrop = await page.locator('//select[@id="superheros"]')
    await multidrop.selectOption([{value:"aq"},{index:2},{label:"Elektra"}])
    const text1 = await multidrop.locator('option:checked').allTextContents()
    console.log("selected superHeros:",text1)

})