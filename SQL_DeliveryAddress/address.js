class  Address{
    constructor(Id,Zipcode,City,Address,State,AdditionnalInfo,Lastname,Firstname,PhoneNumber,PhoneCountryCode,idCountry,idUser){
        this.Id = Id
        this.Zipcode = Zipcode
        this.City = City
        this.Address = Address
        this.State = State
        this.AdditionnalInfo = AdditionnalInfo
        this.Lastname = Lastname
        this.Firstname = Firstname
        this.PhoneNumber = PhoneNumber
        this.PhoneCountryCode = PhoneCountryCode
        this.idCountry = idCountry
        this.idUser = idUser
    }
}

module.exports = Address;