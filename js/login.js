function validate() {
    const cont1=document.getElementById('contact').value;
    const pass1=document.getElementById('pass').value;
    if(cont1=='')
    {
        document.getElementById('cont_warn').style.visibility='visible';
    }
    if(cont1!='')
    {
        document.getElementById('cont_warn').style.visibility='hidden';
    }
    if(pass1=='')
    {
        document.getElementById('pass_warn').style.visibility='visible';
    }
    if(pass1!='')
    {
        document.getElementById('pass_warn').style.visibility='hidden';
    }
    if(cont1=='' || pass1=='')
    {
        return false;
    }
    else
    {
        $(document).ready(function(){
            const user_input={contact1:cont1,password1:pass1};
            $.ajax({
                url:"http://localhost/MyWebsite/php/login.php",
                type:"POST",
                data:user_input,
                success:function(data){
                    if(data=="Account not found"){
                        document.getElementById('res_msg').innerHTML="Account not found";
                        document.getElementById('res_msg').style.visibility='visible';
                    }
                    else if(data=="Logged in"){
                        localStorage.setItem("contact_global", cont1);
                        window.location.href='profile.html';
                    }
                    else if(data=="Invalid password"){
                        document.getElementById('res_msg').innerHTML="invalid username or password";
                        document.getElementById('res_msg').style.visibility='visible';
                    }
                    else if(data=="Invalid input"){
                        document.getElementById('res_msg').innerHTML="please provide the valid input";
                        document.getElementById('res_msg').style.visibility='visible';
                    }
                    else{
                        document.getElementById('res_msg').innerHTML="internal server error "+data;
                        document.getElementById('res_msg').style.visibility='visible';
                    }
                },
                error:function(data){
                    document.getElementById('res_msg').innerHTML="Couldn't reach the servers";
                    document.getElementById('res_msg').style.visibility='visible';
                }
            });
        });
    }
    return false;
}