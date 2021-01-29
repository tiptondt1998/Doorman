class patient extends room{
    constructor(name,roomNumber, visitor, visitorPhoneNum ,covidPositive, finalVisit){
        this.name = name;
        this.roomNumber = roomNumber;
        this.visitor = visitor;
        this. visitorPhoneNum = visitorPhoneNum;
        this.covidPositive = covidPositive;
        this.finalVisitor = finalVisit;
     }
    getRole(){
        return 'patient'
    }

    printNurse(){
        console.log(`Name: ${patient.name}, room number: ${patient.roomNumber}`);
    }
}

module.exports = patient;