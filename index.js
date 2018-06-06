class ShoppingList0 {
    constructor() {
    this.groceries = []
    }

    addItem(item) {
        this.groceries = [...this.groceries, item]
    }

    removeItem(item) {
        this.groceries = this.groceries.filter(grocery => item !== grocery)

    }
}

var myList = new ShoppingList0()

myList.addItem('banana')
myList.addItem('orange')

console.log(myList)
myList.removeItem('banana')
console.log(myList)

