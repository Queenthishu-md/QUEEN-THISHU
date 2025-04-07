const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://raw.githubusercontent.com/Dark-Robin/Bot-Helper/refs/heads/main/autoimage/Bot%20robin%20iz%20alive.jpg' },
    { key: 'ALIVE_MSG', value: '
*╭─〔 𝗤𝘶𝘦𝘦𝘯ₓ* ```THISHU``` *-𝗠𝗗 V1.0*
*╰──────────────*
╔
   𝕎𝔼𝕃𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝕐𝕆𝕌..🫂
                                         ╝
> 𝚃𝙷𝙸𝚂 𝙸𝚂 𝚈𝙾𝚄𝚁 𝚂𝙴𝚂_𝚒𝚍👇
* ${string_session}

━━━━━━❮☎️❯━━━━━━

⚜.```https://Wa.me//+94761480834```' },
    { key: 'PREFIX', value: '.' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
