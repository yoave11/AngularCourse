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
                s += `${printObject(o[n])},\n`
            } else {
                s += `${n}: ${printObject(o[n])}, \n`
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
    this.model = model
    this.size = size
    this.price = price
    this.getNumber = function () {
        return this.number
    }
    this.setNumber = function (n) {
        this.number = n
    }
}