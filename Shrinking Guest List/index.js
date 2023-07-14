var guestList = ['Raza', 'Maaz', 'Ahmed', 'Raffia', 'Mishi'];
guestList.unshift('Kinza');
guestList.splice(3, 0, 'Samrina');
guestList.push("Abdullah");
console.log("The dinner table is late, so I can invite only two people");
for (var i = 0; i <= 5; i++) {
    console.log("I am Sorry ".concat(guestList.pop(), ", I cannot Invite you to the dinner"));
}
console.log(guestList);
for (var i = 0; i <= 1; i++) {
    console.log("Hey ".concat(guestList[i], "! You are still invited!"));
}
guestList.pop();
guestList.pop();
console.log(guestList);
