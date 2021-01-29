class nurse{
    constructor(username, id, password){
        this.username = username;
        this.id = id;
        this.password = password;
     }
    getRole(){
        return 'nurse'
    }

    printNurse(){
        console.log(`Name: ${nurse.username}, id: ${nurse.id}`);
    }
}

module.exports = nurse;
