<
    let bag = ""

    // step -1 select/ catch the element

    const keys = document.querySelectorAll("#keyboard > div");

    //
    for (let i = 0; i < keys.length; i++) {
        kes[i].addEventListener("click", mycal)
    } 

    function mycal(e) {
        let targetNumber = e.target.innerText

        const display = document.querySelector("#input");
        

        if (targetNumber === "C") {
            bag = "";
            display.innerText = bag;
        } else if (targetNumber === "=") {
            let ans = eval(bag);
            display.innerText = ans;
        } else {
            bag += targetNumber;
            display.innerText = bag;
        }
    }
