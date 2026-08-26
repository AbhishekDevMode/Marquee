fs.appendFile('demo.txt','\nthis line was updated','utf-8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Content appended');
});

