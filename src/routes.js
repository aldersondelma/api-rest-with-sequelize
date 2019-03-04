const Post = require('../controllers/post');
const Author = require('../controllers/author');
module.exports = (express,db) => {
    const router = express.Router();

    router.use('/welcome',( req, res, next) => {
        res.send('Welcome to the Worth Idea API!');
        next();
    });

    router.get('/post', Post(db).findAllPosts);
    router.get('/post/:id', Post(db).findOnePost);
    router.post('/post', Post(db).makePost);
    router.put('/post/:id', Post(db).updatePost);
    router.delete('/post/:id', Post(db).deletePost);

    router.get('/author', Author(db).findAllAuthors);
    router.get('/author/:id', Author(db).findOneAuthor);
    router.post('/author', Author(db).subscribe);
    router.put('/author/:id', Author(db).updateData);
    router.delete('/author/:id', Author(db).dropAuthor);

    return router;
}