document.getElementById('generate').addEventListener('click', function() {
    let text = document.getElementById('text').value;
    if (text.trim() === '') {
        alert('Please enter text to generate QR Code');
        return;
    }

    let qrCodeContainer = document.getElementById('qrcode');
    qrCodeContainer.innerHTML = ''; // Clear previous QR code
    let qrCode = new QRious({
        value: text,
        size: 250
    });

    let qrImage = qrCode.toDataURL('image/png');
    let imgElement = document.createElement('img');
    imgElement.src = qrImage;
    qrCodeContainer.appendChild(imgElement);
});
