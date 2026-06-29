Promise.resolve(10)

.then(num => {

    console.log(num);

    return num * 2;

})

.then(num => {

    console.log(num);

    return num + 5;

})

.then(result => {

    console.log(result);

});