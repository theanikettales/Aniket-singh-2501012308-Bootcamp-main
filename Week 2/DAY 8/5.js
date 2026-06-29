const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data Loaded Successfully");
    } else {
        reject("Something Went Wrong");
    }

});

promise
.then(result => console.log(result))
.catch(error => console.log(error));