jQuery(function() {
    function fetchPosts() {
        jQuery.ajax({
            url: 'getPosts.php',
            type: 'GET',
            success: function(posts) {
                jQuery('#postsList').empty();
                posts.forEach((post) => {
                    jQuery('#postsList').append(`<div class="post"><h3>${post.title}</h3><p>${post.body}</p></div>`);
                });
            }
        });
    }

    jQuery('#newPostForm').on('submit', (event) => {
        event.preventDefault();

        const postData = {
            title: jQuery('#postTitle').val(),
            body: jQuery('#postBody').val()
        };

        jQuery.ajax({
            url: 'post.php',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(postData),
            success: function() {
                alert('Post successfully created!');
                jQuery('#postTitle').val('');
                jQuery('#postBody').val('');
                fetchPosts();
            },
            error: function() {
                alert('Error occurred while submitting the post.');
            }
        });
    });

    fetchPosts();
});