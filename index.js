// Code your solutions in this file
function writeCards(friends,message){
    let messages = []
    for (const friend of friends){
        messages.push(`Thank you, ${friend}, for the wonderful ${message} gift!`)
    }
    return messages
}
function countDown(n){
    for(let x=n;x>=0;x--){
        console.log(x)
    }
}