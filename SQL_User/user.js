class  User{
    constructor(Id,Lastname,Firstname,Pass,isSuspended=false,Email,Type){
        this.Id = Id;
        this.Lastname = Lastname;
        this.Firstname = Firstname;
        this.Pass = Pass;
        this.isSuspended = isSuspended;
        this.Email = Email;
        this.Type = Type;
    }
}

module.exports = User;