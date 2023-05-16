function registration(){
    const fname1=document.getElementById('fname').value;
    const lname1=document.getElementById('lname').value;
    const r_no1=document.getElementById('r_no').value;
    const dob1=document.getElementById('dob').value;
    const contact1=document.getElementById('contact').value;
    const pass1=document.getElementById('pass1').value;
    const conpass1=document.getElementById('pass2').value;
    if(fname1=='')
    {
        document.getElementById('warn_fname').style.visibility='visible';
    }
    if(fname1!='')
    {
        document.getElementById('warn_fname').style.visibility='hidden';
    }
    if(lname1=='')
    {
        document.getElementById('warn_lname').style.visibility='visible';
    }
    if(lname1!='')
    {
        document.getElementById('warn_lname').style.visibility='hidden';
    }
    if(r_no1=='')
    {
        document.getElementById('warn_rno').style.visibility='visible';
    }
    if(r_no1!='')
    {
        document.getElementById('warn_rno').style.visibility='hidden';
    }
    if(dob1=='')
    {
        document.getElementById('warn_dob').style.visibility='visible';
    }
    if(dob1!='')
    {
        document.getElementById('warn_dob').style.visibility='hidden';
    }
    if(contact1=='')
    {
        document.getElementById('warn_cont').style.visibility='visible';
    }
    if(contact1!='')
    {
        document.getElementById('warn_cont').style.visibility='hidden';
    }
    if(pass1=='')
    {
        document.getElementById('warn_pass').style.visibility='visible';
    }
    if(pass1!='')
    {
        document.getElementById('warn_pass').style.visibility='hidden';
    }
    if(conpass1=='')
    {
        document.getElementById('warn_conpass').style.visibility='visible';
    }
    if(conpass1!='')
    {
        document.getElementById('warn_conpass').style.visibility='hidden';
    }
    if(fname1=='' || lname1=='' || r_no1=='' || dob1=='' || contact1=='' || pass1=='' || conpass1=='')
    {
        return false;
    }
    else
    {
        if(pass1!=conpass1)
        {
            document.getElementById('warn_conpass').innerHTML="Passwords do not match";
            document.getElementById('warn_conpass').style.visibility='visible';
        }
        else
        {
            var userdata={fname:fname1,
                lname:lname1,
                r_no:r_no1,
                dob:dob1,
                contact:contact1,
                pass:pass1};
            $(document).ready(function(){
                $.ajax({
                    type:"POST",
                    url:"http://localhost/MyWebsite/php/register.php",
                    data:userdata,
                    success: (data) =>{
                        if(data=="duplicate"){
                            document.getElementById('warn_cont').innerHTML="This number already has an account";
                            document.getElementById('warn_cont').style.color='red';
                            document.getElementById('warn_cont').style.visibility='visible';
                            return false;
                        }
                        success_visibility();
                    },
                    error :(data) =>{
                        error_visibility();
                    },
                });
            });
        }
    }
    return false;
}
function success_visibility(){
    document.getElementById('success_msg').style.visibility='visible';
}
function error_visibility(){
    document.getElementById('success_msg').innerHTML="OOPS! couldn't reach the servers";
    document.getElementById('success_msg').style.color='red';
    document.getElementById('success_msg').style.visibility='visible';
}