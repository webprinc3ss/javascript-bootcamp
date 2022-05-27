let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount:  0,
    checkAvailability: function (partySize) {
        //console.log(this.guestCapacity)
        let seatsLeft = this.guestCapacity - this.guestCount
        //return this
        return partySize <= seatsLeft
    },
    seatParty: function  (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }

}

//seatParty
//removeParty
restaurant.seatParty (72)
console.log (restaurant.checkAvailability (4))
restaurant.removeParty(5)
console.log (restaurant.checkAvailability (4))