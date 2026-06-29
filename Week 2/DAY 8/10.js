function checkAge(age){

    if(age < 18){

        throw new Error("You are not eligible.");

    }

    console.log("Welcome");

}

try{

    checkAge(15);

}

catch(error){

    console.log(error.message);

}