let qrcode = document.querySelector('img');
let qrtext = document.querySelector('textarea');
let qrbtn = document.getElementById('QRBtn');
let dL = document.getElementById('Downlaod');


function makeCode() {
    let size = "474x474"
    let data = qrtext.value;
    let baseURL = 'https://api.qrserver.com/v1/create-qr-code/';

    var url = `${baseURL}?data=${data}&size=${size}`;

    qrcode.src = url;
    console.log(url);

    dL.className = 'downloadNow';

}


qrbtn.addEventListener('click', makeCode);


dL.addEventListener('click', () => {
    let imagePath = qrcode.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}