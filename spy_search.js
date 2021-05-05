
const spyFirstName = prompt("Enter their first name: ")
const spyLastName = prompt("Enter their last name: ")
const Age = prompt("Enter their age: ")
const heightCentimeters = prompt("Enter their height in centimeters: ")
const spyPetName = prompt("Enter their pet's name: ")

spy_counter = 0

// checks for the first line of the
if (spyFirstName[0] === spyLastName[0]) {
    spy_counter++
    console.log(spy_counter)

}
else {
    --spy_counter
    console.log(spy_counter)

}

// if age is 20 or greater and 30 or lower (between) then raise spy counter
if ((Age >= 20) && (Age <= 30)) {
    spy_counter++
    console.log(spy_counter)
}
else {
    --spy_counter
    console.log(spy_counter)

}

// if height 170 or higher raise the spy counter
if (heightCentimeters >= 170) {
    spy_counter++
    console.log(spy_counter)

}
else {
    --spy_counter
    console.log(spy_counter)

}

if (spyPetName[spyPetName.length-1].toUpperCase() === "Y") {
    spy_counter++
    console.log(spy_counter)

}
else {
    --spy_counter
    console.log(spy_counter)

}

var endString = `A spy is here. ${spyFirstName} ${spyLastName}. ${Age} years old and ${heightCentimeters} centimeters tall. Oh yeah. Their pet's name. ${spyPetName}. Finish them.`

if (spy_counter >= 4) {
    alert(endString)
}
else {
    alert("Not a spy. Let them be.")
    close()
}
