export class SearchHotelPage {
    constructor (page){
        this.page = page;
        this.location = page.locator('//select[@id="location"]')
        this.Hotel = page.locator('//select[@id="hotels"]')
        this.RoomType = page.locator('//select[@id="room_type"]')
        this.NoOfRoom = page.locator('//select[@id="room_nos"]')
        this.CheckIn = page.locator('//input[@id="datepick_in"]')
        this.CheckOut = page.locator('//input[@id="datepick_out"]')
        this.AdultPerRoom = page.locator('//select[@id="adult_room"]')
        this.ChildrenPerRoom = page.locator('//select[@id="child_room"]')
        this.clickserach = page.locator('//input[@id="Submit"]')

    }
    async enterlocation(){
        await this.location.selectOption({label:"London"})
    }
    async enterHotelname(){
        await this.Hotel.selectOption({label:"Hotel Sunshine"})

    }
    async enterRoomType(){
        await this.RoomType.selectOption({label:"Double"})
    }
    async enterNoOfRoom(){
        await this.NoOfRoom.selectOption({label:"2 - Two"})

    } 
    async entercheckIn(){
        await this.CheckIn.fill('02/07/26')

    }
    async entercheckOut(){
        await this.CheckOut.fill('04/07/26')

    }
    async enterAdultPerRoom(){
        await this.AdultPerRoom.selectOption({label:"2 - Two"})

    }
    async enterChildrenPerRoom(){
        await this.ChildrenPerRoom.selectOption({label:"1 - One"})

    }
    async clickSearchButton(){
        await this.clickserach.click()
    }



}
