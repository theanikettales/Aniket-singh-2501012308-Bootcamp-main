try {

    let a = 10;

    let b = 0;

    if (b === 0) {

        throw new Error("Division by Zero");

    }

    console.log(a / b);

}

catch(error) {

    console.log(error.message);

}