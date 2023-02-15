const Post = require('../models/post');

module.exports = {
    create,
    delete: deleteComment,
    update
};

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`);
        });
    });
}

function deleteComment(req, res) {
    Post.findOne(
        {'comments._id': req.params.id, 'comments.userId': req.user._id},
        function (err, post) {
            if (!post) return res.redirect('/posts');
            post.comments.remove(req.params.id);
            post.save(function(err) {
                console.log(err);
                res.redirect(`/posts/${post._id}`);
            });
        }
    );
}

function update(req, res) {
    Post.findOne({'comments._id': req.params.id}, function(err, post) {
        const comment = post.comments.id(req.params.id);
        comment.content = req.body.content;
        comment.rating = req.body.rating;
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`);
        });
    });
}