const getRange = a => {
    var list = [];
    for (var i = 1; i <= a; i++) {
        list.push(i);
    }
    return list;
}

app.value('inputService', {
    inputs: {
        a: 0, b: 0, resType: 'type1'
    }
})

app.constant('errorService', {
    numberError: "is lower then 1!", divError: 'Divide by Zero!'
})

app.service('aService', function (inputService, errorService) {
    this.get = () => {
        const a = inputService.inputs.a
        if (a < 1) {
            return `A ${errorService.numberError}`
        }
        return getRange(a)
    }
})

app.factory('bService', function (inputService, errorService) {
    console.log(errorService)
    return {
        get: () => {
            const b = inputService.inputs.b
            if (b < 1) {
                return `B ${errorService.numberError}`
            }
            return getRange(b).reverse()
        }
    }
})
