document.addEventListener("DOMContentLoaded", function() {
    // Existing code
    var navHeight = document.querySelector('.flexbox').offsetHeight;
    document.querySelectorAll('.flexbox a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetPosition = document.querySelector(targetId).offsetTop;
            window.scrollTo({
                top: targetPosition - navHeight,
                behavior: 'smooth'
            });
        });
    }); // Missing closing brace for forEach
  });
  

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', function () {
    document.querySelectorAll('.zoom-animate').forEach(function (element) {
        if (isInViewport(element)) {
            element.classList.add('zoom-in-animate');
        } else {
            element.classList.remove('zoom-in-animate');
        }
    });
});

function toggleLike(button) {
    var postId = button.getAttribute('data-post-id');
    var likeCountElement = button.nextElementSibling;
    var storedLikes = localStorage.getItem('likes_' + postId);
    var likeCount = storedLikes ? parseInt(storedLikes) : 0;
    var image = button.querySelector('img'); // Get the image inside the button

    if (button.classList.contains('session-liked')) {
        likeCount--;
        image.src = 'lik1.png'; // Path to plain white heart image
    } else {
        likeCount++;
        image.src = 'lik2.png'; // Path to red heart image
    }

    localStorage.setItem('likes_' + postId, likeCount.toString());
    likeCountElement.textContent = likeCount;
    button.classList.toggle('session-liked');
}


// Initialize like counts and button states on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.like-button').forEach(button => {
        var postId = button.getAttribute('data-post-id');
        var storedLikes = localStorage.getItem('likes_' + postId);
        var likeCount = storedLikes ? parseInt(storedLikes) : 0;
        var likeCountElement = button.nextElementSibling;

        likeCountElement.textContent = likeCount;
    });
});
