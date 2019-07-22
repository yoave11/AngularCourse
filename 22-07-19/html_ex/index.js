
function clicked() {
    //alert(document.getElementById("nameTxt").value)
    //call new Person with values from input boxes
    //-- create Person
    //console.log(person)
    // -- use class
    const name = document.getElementById("nameTxt").value
    const age = document.getElementById("ageTxt").value
    const password = document.getElementById("passwordTxt").value
    const gender = document.querySelector('input[name="gender"]:checked').value
    const car = document.getElementById("carTxt").value
    const hasBike = document.getElementById("hasBikeTxt").checked

    console.log(`function person ${new PersonFunction({ name, age, password, gender, car, hasBike }).toString()}`)
    console.log(`class person ${new PersonClass({ name, age, password, gender, car, hasBike }).toString()}`)

}