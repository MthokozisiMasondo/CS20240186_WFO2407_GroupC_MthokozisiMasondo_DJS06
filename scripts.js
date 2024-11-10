// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Exercises
// 1. Logging the provinces and names
// Provinces
provinces.forEach(province => console.log(province))
// Names
names.forEach(name => console.log(name))

// Names with matching provinces
names.forEach((name, index) =>  console.log(`${name} (${provinces[index]})`))

// 2. Province names in all uppercase
provinces.map(province => console.log(province.toUpperCase()))

// 3. The length of each name
names.map(name => console.log(name.length)) 

// 4. Alphabetically sorting the provinces
console.log(provinces.sort())

// 5. Removing provinces containing "Cape"
const noCapeCount = provinces.filter(province => !province.includes("Cape")).length
console.log(noCapeCount)

// 6. Name contains "S"
// map
names.map(name => console.log(name.toUpperCase().includes("S")))
// some
names.some(name => console.log(name.toUpperCase().includes("S")))

// 7. Transform names and provinces into an object
const namesAndProvinces = names.reduce((acc, name, index) => {
        acc[name] = provinces[index]
        return acc
}, {})

console.log(namesAndProvinces)


// Advanced exercises 
// 1. Log each product name 
const logProducts = products.map(name => name.product)

// 2. Filter out names with more than 5 characters
const lessThanFiveCharacters = products
  .filter(name => name.product.length < 5)
  .map(name => name.product) 

// 3. Price manipulation
// Returning products with prices
const productsWithPrices = products.filter(product => product.price.toString().trim() !== "")

// Converting string prices to numbers
const stringsToNumbers = products.map(product => typeof product.price === 'number' ? product.price : Number(product.price))

// Total of prices
const totalOfPrices = stringsToNumbers.reduce((accumulator, product) => accumulator + product, 0)


// 4. Concatenate product names
const concatenate = products.reduce((accumulator, name) => accumulator + name.product, "")

// 5. Extremes in prices
// Highest
const highestPrice = stringsToNumbers.reduce((maximum, price) => price > maximum ? price : maximum)
// Lowest
const lowestPrice = stringsToNumbers.reduce((minimum, price) => price < minimum ? price : minimum)

// 6. Object transformation
const updatedProducts = products.reduce((acc, product) => {
  const updatedProduct = Object.entries(product).reduce((newObj, [key, value]) => {
    const newKey = key === 'product' ? 'name' : key === 'price' ? 'cost' : key
    newObj[newKey] = value
    return newObj
  }, {})
  acc.push(updatedProduct)
  return acc
}, [])

// Console log for everything
console.log(`All products: ${logProducts}\nNames with less than 5 characters: ${lessThanFiveCharacters}\nChange string prices to number: ${stringsToNumbers}\nTotal of prices: ${totalOfPrices}\nConcatenated product strings: ${concatenate}\nHighest price: ${highestPrice}\nLowest Price: ${lowestPrice}\nObject with new keys: ${JSON.stringify(updatedProducts)}`)