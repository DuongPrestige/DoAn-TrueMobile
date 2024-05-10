const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";
const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  oauth_link
);

// Send Email
exports.sendVerificationEmail = (email, last_name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "True Mobile email verification",
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:'Courier New',Courier,monospace;color:#ff4500"><img src="./public/reyc.jpg" alt="" height="25px" width="50px"><span>Action requise : Activate your ReyC account</span></div><div style="padding:1rem 0;border-top:1px solid #fff;color:#000;font-size:17px;font-family:'Courier New',Courier,monospace"><span>Hello ${last_name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently created an account on ReyC. To complete your registration, please confirm your account!</span></div><a href=${url} style="width:200px;padding:10px 15px;background:#ff4500;color:#000;text-decoration:none;font-weight:600">Xác nhận tài khoản</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#534646">ReyC allows you to stay in touch with all your friends, once registered on ReyC, you can share photos, organize events and much more.</span></div></div>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};

// Send Code
exports.sendResetCode = (email, last_name, code) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Reset password",
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:'Courier New',Courier,monospace;color:#ff4500"><img src="./public/reyc.jpg" alt="" height="25px" width="50px"><span>Action requise : Activate your ReyC account</span></div><div style="padding:1rem 0;border-top:1px solid #fff;color:#000;font-size:17px;font-family:'Courier New',Courier,monospace"><span>Hello ${last_name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently created an account on ReyC. To complete your registration, please confirm your account!</span></div><a style="width:200px;padding:10px 15px;background:#ff4500;color:#000;text-decoration:none;font-weight:600">${code}</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#534646">ReyC allows you to stay in touch with all your friends, once registered on ReyC, you can sare photos, organize events and much more.</span></div></div>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
