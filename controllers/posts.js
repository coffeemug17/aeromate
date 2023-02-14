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

function newPost(req, res) {
    const airlineId = req.params.id;
    Post.findById(req.params.id)
    .populate('airline')
    .exec(function(err, post) {
      Airline.findById(req.params.id,
        function(err, airlines) {
          console.log(airlines);
          res.render(`posts/new`, {
            title: 'Add a New Post',
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