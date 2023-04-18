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
        nums = await getRes.json();
        likeCount = nums.likes;
        dislikeCount = nums.dislikes;
        const likeEl = document.querySelector('.vote-count' + '-' + itemName);
        const dislikeEl = document.querySelector('.vote-count-dislike' + '-' + itemName);
        likeEl.textContent = likeCount;
        dislikeEl.textContent = dislikeCount;
    }
    catch {
        console.log('Error!');
    }
}