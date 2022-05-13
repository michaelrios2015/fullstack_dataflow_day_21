const conn = require('./conn');
const User = require('./User')

// so this acts a bit like the hub
const syncAndSeed = async()=> {
    await conn.sync({ force: true });
    const [moe, lucy, curly] = await Promise.all(
        ['moe', 'lucy', 'curly'].map(User.createWithName)
    );

    // console.log(lucy.get());
};

// and note how I need to ecport my models from here to 
module.exports = {
    models: {
        User
    },
    syncAndSeed
};

