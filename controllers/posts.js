const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
};

function index(req,res) {
    res.render('posts/index', {title: 'All Posts'});
}

function newPost(req,res) {
    res.render('posts/new', {title: 'Add Post'});
}

function create(req,res) {
    const post = new Post(req.body);
    post.save(function(err) {
        if (err) return res.redirect('/posts/new');
        console.log(post);
        res.redirect('/posts');
    });
}