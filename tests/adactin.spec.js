import{test} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { SearchHotelPage } from '../page/SearchHotel.Pagejs'
test('page object model',async({page})=>{
    const login = new LoginPage(page)
await login.LaunchUrl()
await login.enterusername()
await login.enterpassword()
await login.clickloginbutton()

    const SearchHotel = new SearchHotelPage (page)

await SearchHotel.enterlocation()
await SearchHotel.enterHotelname()
await SearchHotel.enterRoomType()
await SearchHotel.enterNoOfRoom()
await SearchHotel.entercheckIn()
await SearchHotel.entercheckOut()
await SearchHotel.enterAdultPerRoom()
await SearchHotel.enterChildrenPerRoom()
await SearchHotel.clickSearchButton()
})

