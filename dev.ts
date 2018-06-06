import { DetailModel } from './detail_model'

class ShoppingList {
    groceries: Array<string>
    details: DetailModel

    constructor() {
        this.groceries = []
    }

    addItem(item) {
        this.groceries = [...this.groceries, item]
        this.details = {
            name: 'myShp',
            phone: '919-610-1234'
        }
    }

    removeItem(item) {
        this.groceries = this.groceries.filter(grocery => item !== grocery)
    }
}


var myList = new ShoppingList()

myList.addItem('banana')
myList.addItem('orange')

console.log(myList)
myList.removeItem('banana')
console.log(myList)
