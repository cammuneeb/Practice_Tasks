let guestList = ['Raza','Maaz','Ahmed','Raffia','Mishi']

guestList.unshift('Kinza')
guestList.splice(3,0,'Samrina')
guestList.push("Abdullah")

console.log("The dinner table is late, so I can invite only two people")

for(let i=0;i<=5;i++)
{
    console.log(`I am Sorry ${guestList.pop()}, I cannot Invite you to the dinner`)
}
console.log(guestList)

for(let i=0;i<=1;i++){
    console.log(`Hey ${guestList[i]}! You are still invited!`)
}
guestList.pop()
guestList.pop()
console.log(guestList)