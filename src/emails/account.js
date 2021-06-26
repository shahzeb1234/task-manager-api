const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'shahzebs.it2018@nsec.ac.in',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, $(name). Let me know how can you get along with the app `
    })
}
const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'shahzebs.it2018@nsec.ac.in',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}. I hpe to see you sometime bye soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}