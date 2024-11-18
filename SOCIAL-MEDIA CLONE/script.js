// DOM Elements
const loginButton = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const userInfo = document.getElementById('user-info');
const authSection = document.getElementById('auth-section');
const postSection = document.getElementById('post-section');
const postButton = document.getElementById('post-btn');
const postTextArea = document.getElementById('post-text');
const feedSection = document.getElementById('feed');
const feedContainer = document.getElementById('feed');

// Sample user data for profile image and username (use real data for a production app)
let currentUser = null;

// Event listener to login
loginButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username !== '') {
        currentUser = username;
        displayUserInfo();
        showPostSection();
    } else {
        alert('Please enter a username.');
    }
});

// Display user info after login
function displayUserInfo() {
    userInfo.innerHTML = `<p>Welcome, ${currentUser} <img src="" alt="Profile" /> </p>`;
    authSection.style.display = 'none';
}

// Show post section after login
function showPostSection() {
    postSection.style.display = 'block';
}

// Event listener to create a post
postButton.addEventListener('click', () => {
    const postContent = postTextArea.value.trim();
    if (postContent !== '') {
        addPost(postContent);
        postTextArea.value = '';  // Clear textarea
    }
});

// Add a post to the feed
function addPost(content) {
    const post = {
        user: currentUser,
        content: content,
        likes: 0,
        comments: [],
    };

    const postElement = createPostElement(post);
    feedSection.appendChild(postElement);
}

// Create a post element in the feed
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('feed-item');

    postElement.innerHTML = `
        <p>${post.content}</p>
        <footer>
            <button class="like-btn" onclick="likePost(this)">Like (${post.likes})</button>
            <button class="comment-btn" onclick="commentPost(this)">Comment</button>
        </footer>
    `;

    return postElement;
}

// Like functionality
function likePost(button) {
    const postElement = button.closest('.feed-item');
    const likes = postElement.querySelector('.like-btn');
    const currentLikes = parseInt(likes.textContent.split(' ')[1]);
    likes.textContent = `Like (${currentLikes + 1})`;
}

// Comment functionality
function commentPost(button) {
    const postElement = button.closest('.feed-item');
    const commentText = prompt('Enter your comment:');
    if (commentText) {
        const comment = document.createElement('p');
        comment.textContent = `Comment: ${commentText}`;
        postElement.appendChild(comment);
    }
}
