let imageBox = document.getElementsByClassName("image-box")[0];
let qrImage = document.getElementsByClassName("qrImage")[0];
let qrText = document.getElementsByClassName("qrText")[0];


function GenerateQRcode(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imageBox.classList.add("show-img");
    }
    else{
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}