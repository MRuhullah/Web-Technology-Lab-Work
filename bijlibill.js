

function bijli() {
    let sum = 0;
    let tax;
    let units = prompt("Enter the number of units consumed : ");
    let test = 34;
    let test2 = units + test;
    console.log(test2);
    if (units <= 100) {
        sum = units * 0.5;
    } else if (units <= 150) {
        sum = (100 * 0.5) + ((units - 100) * 1);
    } else if (units <= 200) {
        sum = (100 * 0.5) + ((50) * 1) + ((units - 150) * 1.5);
    } else {
        sum = (100 * 0.5) + ((50) * 1) + ((50) * 1.5) + (((units - 200) * 5));
    }

    sum = sum + (0.2 * sum);
    document.getElementById("div").innerHTML = `Units Used : ${units} <br> Balance : ${sum}`;
    setTimeout(() => {
        alert(`Your Bill is : ${sum}`);
    }, 5);


}
bijli();