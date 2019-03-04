module.exports = (sequelize, dataTypes) => {
    const Post = sequelize.define('post', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: dataTypes.STRING,
        content: {
            type: dataTypes.TEXT,
            allowNull: false
        }
    },
    {
       freezeTable: true 
    });

    Post.associate = models => {
        Post.belongsTo(models.author);
    };

    return Post;
}