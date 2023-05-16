let contact=localStorage.getItem('contact_global');
window.onload=function(){
    var userRequest={key:contact};
    $.ajax({
        url:"http://localhost/MyWebsite/php/profile.php",
        type:"POST",
        data:userRequest,
        success:function(data){
            var parsed_data=JSON.parse(data);
            document.getElementById('user').innerHTML=parsed_data['firstname']+' '+parsed_data['lastname'];
            document.getElementById('Id').innerHTML+=parsed_data['id'];
            document.getElementById('fname').innerHTML+=parsed_data['firstname'];
            document.getElementById('lname').innerHTML+=parsed_data['lastname'];
            document.getElementById('rno').innerHTML+=parsed_data['roll_no'];
            document.getElementById('dob').innerHTML+=parsed_data['DOB'];
            document.getElementById('cont').innerHTML+=parsed_data['contact'];
        },
        error:function(data){
            alert("Error while fetching data from the server");
        }
    });
}
function logout()
{
    localStorage.setItem("logout_request",true);
    localStorage.setItem("contact_global",null);
    window.location.href='index.html';
    return false;
}