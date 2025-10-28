import QRCode from "qrcode";

const url = "https://festival-website-rosy.vercel.app/"; // your site link
QRCode.toFile("festivalQR.png", url, function (err) {
  if (err) throw err;
  console.log("✅ QR code saved as festivalQR.png!");
});
