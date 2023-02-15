const Airline = require('../models/airline');
const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
};

function index(req,res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', {title: 'All Posts', posts});
    });
}

function newPost(req, res) {
    Airline.findById(req.params.id, function(err, airline) {
        res.render('posts/new', {title: 'Add a New Post', airline});
    })
}

function create(req,res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const post = new Post(req.body);
    post.save(function(err) {
        console.log(err);
        if (err) return res.redirect('/posts/new');
        console.log(post);
        res.redirect('/posts');
    });
}
    // const airlineId = req.params.id;
    // Post.findById(req.params.id)
    // .populate('airline')
    // .exec(function(err, post) {
    //   Airline.findById(req.params.id,
    //     function(err, airline) {
    //       res.render(`posts/new`, {
    //         title: 'Add a New Post',
    //         post,
    //         airline
    //       });
    //     }
    //   );
    // });