const transporter = require("../config/nodemailer");

module.exports = {
  sendBill: async ({ user, idBill, details, createdAt }) => {
    let totalBill = 0;
    const tableBillMap = details.map(({ name, price, amount }) => {
      totalBill += amount * price;
      return `<div>
      <span>${amount} </span>
      <span>${name}</span>
      <span> $ ${price} USD</span>
    </div>`;
    });
    const tableBillJoin = tableBillMap.join("");
    await transporter.sendMail({
      from: '"👻 edar-ecommerce 👻" <testedarcode@gmail.com>', // sender address
      to: user.email, // list of receivers
      subject: "✔ 👻 Factura edar-ecommerce 👻 ✔", // Subject line
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
            html {
              background-color: #333;
              color: white;
            }
          </style>
        </head>
        <body>
          <div>Id factura: ${idBill}</div>
          <div>Fecha factura: ${createdAt}</div>
          <div>Usuario: ${user.email}</div>
          <section>
            ${tableBillJoin}
          </section>
          <div>Total: $ ${totalBill} USD</div>
        </body>
      </html>
      `, // html body
    });
  },
};
