async function updateCount(itemName, type) {
    try {
        console.log('Calling incrementCount');
        const incrementRes = await fetch(`/api/incrementCount/${itemName}/${type}`, {
            method: 'POST',
        });
        console.log('finished fetch call');
        console.log(incrementRes.json());

        const getRes = await fetch(`/api/getCount/${itemName}`);
        console.log(getRes);
        nums = getRes.json();
        console.log(nums);
        likeCount = nums.likes;
        console.log('Like count: ' + likeCount);
        dislikeCount = nums.dislikes;
        console.log('Dislike count: ' + dislikeCount);
        const likeEl = document.querySelector('.vote-count' + '-' + itemName);
        const dislikeEl = document.querySelector('.vote-count-dislike' + '-' + itemName);
        likeEl.textContent = likeCount;
        dislikeEl.textContent = dislikeCount;
    }
    catch {
        console.log('Error!');
    }
}

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