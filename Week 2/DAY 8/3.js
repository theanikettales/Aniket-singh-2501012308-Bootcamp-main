function greet(name, callback) {

    console.log("Hello", name);

    callback();

}

function goodbye() {

    console.log("Good Bye!");

}

greet("Anu", goodbye);