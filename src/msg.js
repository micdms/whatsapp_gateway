const bot = require('./telegram');

const msg = {
    chat: async (data) => {
        const template = `
New ${data.jenis} Created.
From Project: ${data.project},
BOQ Item: ${data.boq}
Link: ${data.link}

Thank you,
PT Deltamas Solusindo
        `;
        try {
            await bot.sendMessage(data.no, template);
            return { status: true };
        } catch (error) {
            console.log(error)
            return { status: false };
        }
    },

    reminder: async (data) => {
        const template = `
Reminder ${data.jenis}.
From Project: ${data.project},
BOQ Item: ${data.boq}
Link: ${data.link}

Thank you,
PT Deltamas Solusindo
        `;
        try {
            await bot.sendMessage(data.no, template);
            return { status: true };
        } catch (error) {
            return { status: false };
        }
    }
}

module.exports = msg;
