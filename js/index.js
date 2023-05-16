function loginPage(){
    let req=localStorage.getItem('contact_global');
    if(req==null || req=='null'){
        window.location.href='login.html';
    }
    else{
        window.location.href='profile.html';
    }
}
function registerPage(){
    window.location.href='register.html';
}
function sendMail(){
    window.location.href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZjBVlhxgksRhbBWFDRLfqvgpFrVfDJmSQPxZCNDGmJgxbTbzHCBdMvPCkrzTgrlMjWnV";
}
function visit_profile(){
    window.location.href="https://www.linkedin.com/in/selvaprasanth-s-371898248";
}
function contact_viaTelegram(){
    window.location.href="https://www.t.me/s/SELVAPRASANTHS";
}
function instagram_profile(){
    window.location.href="https://instagram.com/prasanth_sellasamy?igshid=ZDdkNTZiNTM=";
}
function facebook_profile(){
    window.location.href="https://www.facebook.com/help/396528481579093/?helpref=uf_share";
}