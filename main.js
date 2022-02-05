var usernames = prompt("");
var namelist = usernames.split(",");

for(var index in namelist){
    console.log("<li>" + (+index + 1 ) +" "+ namelist[index] + "<li/>");
}
