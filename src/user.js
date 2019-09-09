import './style.css'

export default class Human {
    constructor (fName, sName) {
        this.fName = fName
        this.sName = sName
    }
    sayHi () {
        alert ('Hi')
    }
}