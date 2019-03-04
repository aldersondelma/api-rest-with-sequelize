module.exports = db => (
    {
        async findAllAuthors (req, res) {
            try {
                const authors = await db.author.finAll({
                    attrributes: []
                });

                res.json(authors);

            } catch (err) {
                res.send(err);
            }
        },

        async findOneAuthor (req, res) {
            try {
                const { id } = req.params;
                const author = await db.author.findById(id);
    
                res.json(author);

            } catch (err) {
               res.send(err); 
            }
        },

        async subscribe (req, res) {
            try {
                const { name, lastName } = req.body;
                const author = await db.author.create({ name, lastName });

                res.json(author);

            } catch (err) {
                res.send(err);
            }
        },

        async updateData (req, res) {
            try {
                const { id } = req.params;
                const { name, lastName } = req.body;

                const author = await db.author.update(
                    { name, lastName },
                    {
                        where: id
                    }
                );
                res.json(author);

            } catch (err) {
                res.send(err);
            }
        },

        async dropAuthor (req, res) {
            try {
                const { id } = req.params;

                await db.author.destroy({ where: id });
    
                res.json({ warning: 'Successfully deleted.'});

            } catch (err) {
                res.send(err)
            }
        }
    }
)