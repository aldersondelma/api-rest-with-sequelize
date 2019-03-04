module.exports = (sequelize, dataTypes) => {
    const Author = sequelize.define('author', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
        lastName: dataTypes.STRING
    },
    {
        timestamps: false,
        freezeTable: true 
    });

    Author.associate = models => {
        Author.hasMany(models.post);
    };

    return Author;
}