const fs=require('fs');

fs.rename('abc.txt','abcd.txt',(err)=>{
    if(err)throw err;
    console.log('Renamed');
});
