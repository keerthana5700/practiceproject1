// webtable ---> A Web Table is used to display data in rows and columns on a web page.
// Data are used to store in a application are called cloud data or server data.
// row -> record 
// cloumn -> field
//To contain() -> It is used to check whether a specific data or text is present in a web table.
// To equal () -> It is used to compare the actual value with the expected value. It checks whether both values are equal.
// except () -> expect is an assertion. It is used to verify whether the actual result matches the expected result.
// assert means verify
   


import {test,expect} from '@playwright/test'
test('webtable Handling',async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/')
const rowData = await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
console.log(rowData)
await expect(rowData).toContain('Tiger Nixon')
await expect(rowData).toEqual([
  'Tiger Nixon',
  'System Architect',
  'Edinburgh',
  '61',
  '2011/04/25',
  '$320,800'
])
const columnData = await page.locator('//table[@id="table02"]//tbody//tr//td[2]').allTextContents()
console.log(columnData)
await expect(columnData).toContain('Accountant')

const data = await page.locator('//table[@id="table02"]//tbody//tr[4]//td[3]').textContent()
console.log(data)
await expect(data).toEqual('Edinburgh')
})
   