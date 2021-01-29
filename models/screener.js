class screener{
    constructor(username, password){
        this.username = username;
        this.password = password;
     }
    getRole(){
        return 'screener'
    }
}

module.exports = screener;