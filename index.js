jQuery(function() {
    function fetchPosts() {
        jQuery.ajax({
            url: 'get_posts.php',
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

        if(postData.title.length > 255) {
            return alert("Title length cannot exceed 255 characters")
        }

        if(postData.body.split(" ").length > 1000) {
            return alert("Body length cannot exceed 1000 words")
        }

        if(postData.body.length > 8000) {
            return alert("Body length cannot exceed 8000 characters")
        }

        jQuery.ajax({
            url: 'create_post.php',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(postData),
            success: function(result) {
                alert(result);
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