const figlet = require('figlet');
figlet("Saikrishna", function(err, data){
    if(err)
    {
        console.log("something went Wrong");
        console.dir(err);
        return;
    }
    console.log(data);
});
