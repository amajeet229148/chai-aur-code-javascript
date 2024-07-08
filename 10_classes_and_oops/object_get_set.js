const user = {
    _username: 'manish',
    _email: 'manish@gmail.com',

    get username(){
        return this._username.toUpperCase()
    },
    set username(value){
        this._username = value
    }
}
const tea = Object.create(user)
console.log(tea.username);