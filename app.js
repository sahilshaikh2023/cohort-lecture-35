//  i want to write the code about the i entered the code will be locked when i wirte the three timess


let sahipassword   =  "sahil";

let attempt = 0 ; 

let password = prompt("Enter the password : ");

attempt++ ;

while(password !== sahipassword){
if (attempt===3){
    console.error("Account locked")
    break;
}
    

     password = prompt("Enter the password : ");
     attempt++;

    
}

if(password===sahipassword){
    console.log("Account is Open");
}