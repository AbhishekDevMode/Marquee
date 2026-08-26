function bookTicket(customerName,callback){
    console.log(`bookin movie ticket for${customerName}`);
    callback();
}
bookTicket("abhishek",function(){
    console.log('ticket checking')
});

const confirmbook=new Promise((resolve,reject)=>{
    let bookingconfirm=true;

    if(bookingconfirm){
        resolve("Movie ticket booked");
    }else{
        reject("booking failed");
    }
});
confirmbook.then((message)=>{
    console.log(message);
})
