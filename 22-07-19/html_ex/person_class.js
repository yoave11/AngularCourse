class PersonClass {
    constructor({ name, age, password, gender, car, hasBike }) {
        this.name = name
        this.age = age
        this.password = password
        this.gender = gender
        this.car = car
        this.hasBike = hasBike

    }
    toString() {
        const { name, age, password, gender, car, hasBike } = this
        return JSON.stringify({ name, age, password, gender, car, hasBike })
    }
}