let itemNames = ['Movie1'];

let likeCounts = new Map();
const dislikeCounts = new Map();

function initialize() {
    for (const name of itemNames) {
        likeCounts.set(name, 0);
        dislikeCounts.set(name, 0);
    }
}

function updateCount(itemName, mode) {

    if (mode === 'like') {
        if (likeCounts.has(itemName)) {
            console.log("Here is count before: " + likeCounts.get(itemName));
            likeCounts[itemName] = likeCounts.get(itemName) + 1;
            console.log("Here is count after: " + likeCounts[itemName]);
        }
        else {
            console.log("Error: itemName does not match any key in likeCounts");
        }
    }

    else if (mode === 'dislike') {
        if (dislikeCounts.has(itemName)) {

        }
        else {
            console.log("Error: itemName does not match any ket in dislikeCounts");
        }
    }

    else {
        console.log("Error: mode does not match function call");
    }
}