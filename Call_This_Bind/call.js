function setUsername(username){
    //Complex DB Calls
    this.username = username;
    console.log('called')
}

function createUser(email,username,pass){
    setUsername.call(this,username);
    this.email = email;
    this.pass = pass;
}

const abhi = new createUser("abhijeet@google.com",'abhijeet','123')
console.log(abhi)