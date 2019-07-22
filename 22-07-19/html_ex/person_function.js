function PersonFunction({ name, age, password, gender, car, hasBike }) {
    this.name = name
    this.age = age
    this.password = password
    this.gender = gender
    this.car = car
    this.hasBike = hasBike
    this.toString = function () {
        return JSON.stringify({ name, age, password, gender, car, hasBike })
    }
}