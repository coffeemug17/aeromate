const Airline = require('../models/airline');
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
    Post.findById(req.params.id)
    .populate('airline')
    .exec(function(err, post) {
        Airline.findById(_id ,
            function(err, airline) {
                console.log(airline)
                res.render(`posts/new/airlines/${airline._id}`, {
                    title: 'New Post',
                    post,
                    airlines
                });
            }
        );
    });
}

function create(req,res) {
    const post = new Post(req.body);
    post.save(function(err) {
        if (err) return res.redirect('/posts/new');
        console.log(post);
        res.redirect('/posts');
    });
}