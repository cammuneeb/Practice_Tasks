var guestList = ['Raza', 'Maaz', 'Ahmed', 'Raffia', 'Mishi'];
for (var i = 0; i <= 4; i++) {
    console.log("Hi ".concat(guestList[i], "! Hope you're well. I am writing this to inform you thatyou have been invited to the dinner at our farmhouse tomorrow at 8pm. Looking forward to see you!"));
}
console.log(guestList[0], 'will not be able to come');
guestList[0] = 'Doctor';
for (var i = 0; i <= 4; i++) {
    console.log("Hi ".concat(guestList[i], "! Hope you're well. I am writing this to inform you thatyou have been invited to the dinner at our farmhouse tomorrow at 8pm. Looking forward to see you!"));
}
