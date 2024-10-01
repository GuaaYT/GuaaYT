let posts = [];
let postCount = 0;

// Create a new post and display it in the feed
function createPost() {
    const postContent = document.getElementById('new-post').value;
    if (postContent.trim()) {
        posts.push(postContent);
        postCount++;

        // Update the post count in profile
        document.getElementById('post-count').innerText = postCount;

        // Clear input field
        document.getElementById('new-post').value = '';

        // Display posts
        displayPosts();
    }
}

// Display all posts in the feed
function displayPosts() {
    const postFeed = document.getElementById('posts');
    postFeed.innerHTML = '';

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <p>${post}</p>
            <button onclick="deletePost(${index})">Delete</button>
        `;
        postFeed.appendChild(postDiv);
    });
}

// Delete a post
function deletePost(index) {
    posts.splice(index, 1);
    postCount--;

    // Update the post count in profile
    document.getElementById('post-count').innerText = postCount;

    // Refresh the posts
    displayPosts();
}