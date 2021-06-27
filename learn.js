/*
    Nullish coalescing operator (??)
*/

const name = ''
const costPrice = 0

const calculatePrice = (name, costPrice)=>{
    const enteredName = name || 'Default Name'
    const enteredCost = costPrice || 0.15
    console.log(enteredName)
    console.log(enteredCost)
}

calculatePrice(null, null)
calculatePrice(undefined, undefined)
calculatePrice('', 0)

// Default Name
// 0.15
// Default Name
// 0.15
// Default Name
// 0.15


const calculateNewPrice = (name, costPrice)=>{
    // Nullish coalescing operator (??)
    // const enteredName = name ?? 'Default Name'
    // const enteredCost = costPrice ?? 0.15
    // let enteredCost, enteredName
    console.log(name, costPrice)
    if(costPrice == null){
        costPrice = 0.15
    }
    
    if(name == null){
        name = 'Default Name'
    }
    console.log(name)
    console.log(costPrice)
}
calculateNewPrice(null, null)
calculateNewPrice(undefined, undefined)
calculateNewPrice('', 0)

//  // empty string
// 0

/*
Optional Chaining 
*/

const person = {
    name: {
        firstName: 'Awesome',
        lastName: 'Blossom'
    },
    address: {
        street: {
            street1: 'street1',
            street2: 'street2',
            street3: 'street3'
        }
    }
}

const person2 = {} // does not have any properties
// notice the question marks
console.log(person2?.address?.street.street1)


/*

*/