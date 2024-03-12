const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 6);
const wa_client = require('./whatsapp');

const otp = {
    'create_otp': async (data) => {
        const otp = nanoid();
        const template_otp = `
This is your one-time password ${otp}.

Thank you,
PT Deltamas Solusindo
        `;
        try {
            await wa_client.sendMessage(`${data.telephone}@c.us`, template_otp);
            return { status: true, otp: otp };
        } catch (error) {
            return { status: false };
        }
    }
}
module.exports = otp;