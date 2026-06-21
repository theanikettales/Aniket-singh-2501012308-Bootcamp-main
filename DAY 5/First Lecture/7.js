// object data type

// non primitive
//collection of key value pairs
// mutuable
// {}
// dynamic of size/lenght
// key => string, value=> anything
// key -> unique identifier, value -> can be duplicate 


//CRUD 
let obj = {};
obj = {
    id: 19,
    name: "love",
    hobby: ["Reading", "Traveling", "Cooking"],
    status: false,
    address: {
        street: "123 Main St",
        city: "gurugram",
        zip: "10001"
    },
};

//2. read
console.log(obj, typeof obj);

//3. update
obj["status"] = true;
obj.name = "amiket"

// create a new value key pair
obj.email = "theanikettales"

console.log(obj)

//4. delete
delete obj["email"]
delete obj.id
console.log(obj);
