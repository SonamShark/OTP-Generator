function otpGenerator(){
    let otpshow = document.getElementById("otp");
    let digits = "0123456789";
    let otp = "";

    //generate 4 digit otp

    for(let i=0; i<4; i++){
        otp += digits[Math.floor(Math.random()*10)];
    }

    // to display loader
    otpshow.innerHTML = "<span></span>";

    // display otp after 1 second

    setTimeout(()=>{
        otpshow.innerHTML = otp;
    }, 1000);
}