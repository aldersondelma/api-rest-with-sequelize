module.exports = db => (
    {
        async findAllPosts (req, res) {
            try {
                const posts = await db.post.finAll({
                    attributes: []
                });

                res.json(posts);

            } catch (err) {
                res.send(err);
            }
        },

        async findOnePost (req, res) {
            try {
                const { id } = req.params;
                const post = await db.post.findById(id);
    
                res.json(post);

            } catch (err) {
               res.send(err); 
            }
        },

        async makePost (req, res) {
            try {
                const { title, content } = req.body;
                const post = await db.post.create({ title, content });

                res.json(post);

            } catch (err) {
                res.send(err);
            }
        },

        async updatePost (req, res) {
            try {
                const { id } = req.params;
                const { title, content } = req.body;

                const post = await db.post.update(
                    { title, content },
                    {
                        where: id
                    }
                );
                res.json(post);

            } catch (err) {
                res.send(err);
            }
        },

        async deletePost (req, res) {
            try {
                const { id } = req.params;

                await db.post.destroy({ where: id });
    
                res.json({ warning: 'Successfully deleted.'});

            } catch (err) {
                res.send(err)
            }
        }
    }
)