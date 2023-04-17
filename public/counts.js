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


    /* old logic
    if (mode === 'like') {
        if(!likeCounts.has(itemName)){
            likeCounts.set(itemName, 0)
        }
        console.log("Here is count before: " + likeCounts.get(itemName));
        likeCounts[itemName] = likeCounts.get(itemName) + 1;
        likeCounts.set(itemName, likeCounts.get(itemName) + 1)
        console.log("Here is count after: " + likeCounts[itemName]);
        const voteCount = document.querySelector('.vote-count' + '-' + itemName);
        voteCount.textContent = likeCounts.get(itemName);
    }

    else if (mode === 'dislike') {
        if(!dislikeCounts.has(itemName)){
            dislikeCounts.set(itemName, 0)
        }
        console.log("Here is the dislike count before: " + dislikeCounts.get(itemName));
        dislikeCounts[itemName] = dislikeCounts.get(itemName) + 1;
        dislikeCounts.set(itemName, dislikeCounts.get(itemName) + 1)
        console.log("Here is dislike count after: " + dislikeCounts[itemName])
        const voteCount = document.querySelector('.vote-count-dislike' + '-' + itemName);
        voteCount.textContent = dislikeCounts.get(itemName);
    }

    else {
        console.log("Error: mode does not match function call");
    }
    */
}