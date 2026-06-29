let count = 1;

const timer = setInterval(() => {

    console.log("Counter:", count);

    count++;

    if (count > 5) {
        clearInterval(timer);
    }

}, 1000);