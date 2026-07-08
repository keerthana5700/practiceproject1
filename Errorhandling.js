// Error Handling (try, catch, throw, finally)

// try ------> Code handle
// catch ----> Error handle
// throw ----> It is a keyword. We specify the identified error in throw.
// finally --> Error occurs or not, it will be executed.

// Voting Scenario

try {
    const age = 28;

    if (age <= 19) {
        throw "Not eligible for vote";
    }

    console.log("Eligible for vote");
}
catch (error) {
    console.log(error);
}

// Promise (resolve, reject)

// resolve ------> Accept the promise -----> .then() -----> used to handle
// reject -------> Reject the promise -----> .catch() -----> used to handle

// Scenario: Food Order

const foodOrder = new Promise((resolve, reject) => {

    const shopOpen = false;

    setTimeout(() => {

        if (shopOpen) {
            resolve("Ready to Delivery");
        } else {
            reject("Shop Closed");
        }

    }, 3000);

});

foodOrder
    .then(val => console.log(val))
    .catch(err => console.log(err));  