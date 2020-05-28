import { setApiKey, send } from "@sendGrid/mail";

export function handler(event, context, callback) {
  if (event.httpMethod === "POST") {
    setApiKey(process.env.REACT_APP_SENDGRID_API_KEY); //API KEY stored in file not tracked by git
    const body = JSON.parse(event.body);
    const msg = {
      to: "Craft.Kevin.J@Gmail.com",
      from: body.email,
      subject: `Website Contact from ${body.name}`,
      text: body.message,
    };

    console.log("msg :", msg);

    send(msg)
      .then((result) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({}),
        });
      })
      .catch((err) => {
        console.log("Error:", err);
        callback(null, {
          statusCode: 401,
          body: JSON.stringify({}),
        });
      });
  }
}
