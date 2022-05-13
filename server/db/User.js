const { faker } = require('@faker-js/faker');
const conn = require('./conn');
const { STRING, TEXT } = conn.Sequelize;

// this is remember each table can get it's own file it does make it easier to read

const User = conn.define('user', {
    name: STRING,
    bio: TEXT
}, {
    hooks: {
        beforeCreate: function(user){
            if(!user.bio){
                user.bio = `${user.name}. ${faker.lorem.paragraphs(3)}`
            }
            // console.log(user)
        }
    }
});

User.createWithName = (name)=> User.create({ name });

module.exports = User;


