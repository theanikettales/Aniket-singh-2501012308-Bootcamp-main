function getData() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve("Student Data Loaded");

        }, 2000);

    });

}

async function displayData() {

    const result = await getData();

    console.log(result);

}

displayData();