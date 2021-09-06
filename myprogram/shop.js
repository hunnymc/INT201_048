let coin500 = 0;
let coin100 = 0;
let coin50 = 0;
let coin20 = 0;
let coin10 = 0;
let coin5 = 0;
let coin2 = 0;
let coin1 = 0;

function customer(price, cash) {
    this.price = price;
    this.cash = cash;

function money(price, cash) {
    change = cash - price;
    

    while (change >= 500) {
        change -= 500;
        coin500 += 1;
    }

    while (change >= 100) {
        change -= 100;
        coin100 += 1;
    }

    while (change >= 50) {
        change -= 50;
        coin50 += 1;
    }

    while (change >= 20) {
        change -= 20;
        coin20 += 1;
    }

    while (change >= 10) {
        change -= 10;
        coin10 += 1;
    }

    while (change >= 5) {
        change -= 5;
        coin5 += 1;
    }

    while (change >= 2) {
        change -= 2;
        coin2 += 1;
    }

    while (change >= 1) {
        change -= 1;
        coin1 += 1;
    }

    console.log("--------------------------------------------------");
    console.log("price : " + price + " cash : " + cash);
    console.log("500 = " + coin500);
    console.log("100 = " + coin100);
    console.log("50 = " + coin50);
    console.log("20 = " + coin20);
    console.log("10 = " + coin10);
    console.log("5 = " + coin5);
    console.log("2 = " + coin2);
    console.log("1 = " + coin1);
    console.log("--------------------------------------------------");

}

money(500, 1000);
money(124, 132452);
money(2, 4);


    // while (change >= 500) {
    //         change -= 100;
    //         coin100 += 1;
    //     }
    // }
    //     for (change >= 500) {    
    //     if(;change >= 50;) {
    //         change -= 50;
    //         coin50 += 1;
    //     }
    //     }

    // for (change >= 500) {
    //     if(;change >= 20;) {
    //         change -= 20;
    //         coin20 += 1;
    //     }
    // }

    // for (change >= 500) {
    //     if(;change >= 10;) {
    //         change -= 10;
    //         coin10 += 1;
    //     }
    // }

    // for (change >= 500) {
    //     if(;change >= 5;) {
    //         change -= 5;
    //         coin5 += 1;
    //     }
    // }

    // for (change >= 500) {
    //     if(;change >= 2;) {
    //         change -= 2;
    //         coin2 += 1;
    //     }
    // }