const wa_client = require('./whatsapp');

const msg = {
    'chat': async (data) => {
        const template = `
New ${data.jenis} Created.
From Project: ${data.project},
BOQ Item: ${data.boq}
Link: ${data.link}

Thank you,
PT Deltamas Solusindo
        `;
        try {
            await wa_client.sendMessage(`${data.no}@c.us`, template);
            return { status: true };
        } catch (error) {
            return { status: false };
        }
    },

    'reminder': async (data) => {
        const template = `
Reminder ${data.jenis}.
From Project: ${data.project},
BOQ Item: ${data.boq}
Link: ${data.link}

Thank you,
PT Deltamas Solusindo
        `;
        try {
            await wa_client.sendMessage(`${data.no}@c.us`, template);
            return { status: true };
        } catch (error) {
            return { status: false };
        }
    }
}
module.exports = msg;