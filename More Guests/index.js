var guestList = ['Raza', 'Maaz', 'Ahmed', 'Raffia', 'Mishi'];
for (var i = 0; i <= 4; i++) {
    console.log("Hi ".concat(guestList[i], "! Hope you're well. I am writing this to inform you thatyou have been invited to the dinner at our farmhouse tomorrow at 8pm. Looking forward to see you!"));
}
console.log(guestList[0], 'will not be able to come');
guestList[0] = 'Doctor';
for (var i = 0; i <= 4; i++) {
    console.log("Hi ".concat(guestList[i], "! Hope you're well. I am writing this to inform you thatyou have been invited to the dinner at our farmhouse tomorrow at 8pm. Looking forward to see you!"));
}
console.log("I got a bigger dinnig table so I'm gonna invite 3 more guests");
guestList.unshift('Kinza');
guestList.splice(3, 0, 'Samrina');
guestList.push("Abdullah");
console.log(guestList);
for (var i = 0; i <= 7; i++) {
    console.log("Hi ".concat(guestList[i], "! Hope you're well. I am writing this to inform you thatyou have been invited to the dinner at our farmhouse tomorrow at 8pm. Looking forward to see you!"));
}
