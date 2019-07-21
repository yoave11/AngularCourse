const myself = {
    name: 'yoav',
    age: 26,
    address: {
        city: 'haifa',
        country: 'israel',
    }
    ,
    family: [{ name: 'dani', age: 55 }, { name: 'dani2', age: 552 }],
    getAddress: function () {
        return this.address
    },
    howManyRelatives: function () {
        return this.family.size
    },
    printMyName: function () {
        console.log(this.name)
    },
    addFamilyRelative: function (f) {
        this.family.push(f)
    }
}

function stringObject(o) {
    const isArray = o instanceof Array
    let s = ''
    if (isArray) {
        s += '[ \n'
    }
    else {
        s += '{ \n'
    }
    for (let n in o) {
        if (typeof o[n] === 'object') {
            if (isArray) {
                s += `${stringObject(o[n])},\n`
            } else {
                s += `${n}: ${stringObject(o[n])}, \n`
            }

        }
        else {
            if (isArray) {
                s += `${o[n]}, \n`
            } else {
                s += `${n}: ${o[n]}, \n`
            }

        }
    }

    if (isArray) {
        s += ']'
    }
    else {
        s += '}'
    }
    return s
}
const printObject = a => console.log(stringObject(a))
printObject(myself)

function CreateMobilePhone(model, size, price, number) {
    var res = {
        model,
        size,
        price,
        number,
        getNumber: function () {
            return this.number
        },
        setNumber: function (n) {
            this.number = n
        }
    }
    return res
}

function MobilePhone(model, size, price, number) {
    this.size = size
    this.getNumber = function () {
        return this.number
    }
    this.setNumber = function (n) {
        this.number = n
    }
    
    let __price = 0
    this.setPrice = function (newPrice) {
        if (newPrice > __price)
            __price = newPrice
    }
    this.getPrice = function () {
        return __price
    }

    let __model = ''
    this.setModel = function (newModel) {
        if (newModel.length >= 4)
            __model = newModel
    }
    this.getModel = function () {
        return __model
    }

    this.setModel(model)
    this.setPrice(price)
    this.setNumber(number)
}

let phone1 = new MobilePhone('f', 2, 3, 5)
phone1.setModel('nokia 9000')
console.log(`model - ${phone1.getModel()}`)
phone1.setPrice(90)
phone1.setPrice(80)

console.log(`price - ${phone1.getPrice()}`)
