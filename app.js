let qrcode = document.querySelector('img');
let qrtext = document.querySelector('textarea');
let qrbtn = document.getElementById('QRBtn');


function makeCode() {
    let size = "474x474"
    let data = qrtext.value;
    let baseURL = 'https://api.qrserver.com/v1/create-qr-code/';

    let url = `${baseURL}?data=${data}&size=${size}`;

    qrcode.src = url;
    console.log(url);
}

qrbtn.addEventListener('click', makeCode);