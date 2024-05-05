function checkEmail(strEmail)
{
	var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
	return (emailFormat.test(strEmail))? true : false;
}

//Check mobile number format
function checkMobile(strMobile)
{
	var mobFormat = /^[6-9]\d{9}$/;
	return (mobFormat.test(strMobile))? true : false;
}

function validateForm(){
    var  frm = document.frmRegister;
    
    //triming the spaces
    for(var i=0; i<frm.elements.length; i++){
        if(frm.elements[i].type=="text" || frm.elements[i].type=="textarea"){
            frm.elements[i].value = frm.elements[i].value.trim();
        }
    }
    
    //validation starts
    if(frm.txtFName.value==""){
        alert("Please enter your First Name !");
        frm.txtFName.focus();
        return;
    }

    if(frm.txtLName.value==""){
        alert("Please enter your Last Name !");
        frm.txtLName.focus();
        return;
    }

    if(frm.branch.selectedIndex==0){
        alert("Please select your Branch !");
        frm.branch.focus();
        return;
    }

    if(frm.Batch.selectedIndex==0){
        alert("Please select your Batch !");
        frm.Batch.focus();
        return;
    }

    if(frm.yearOfPass.value==""){
        alert("Please Enter your Year of Passing !");
        frm.yearOfPass.focus();
        return;
    }else if(isNaN(frm.yearOfPass.value)){
        alert("Please Enter a Valid Year of Passing !");
        frm.yearOfPass.focus();
        frm.yearOfPass.select();
        return;
    }

    if(frm.mobileNo.value==""){
        alert("Please Enter your Mobile Number !");
        frm.mobileNo.focus();
        return;
    }else if(isNaN(frm.mobileNo.value)){
        alert("Please Enter a Valid Mobile Number of 10digits");
        frm.mobileNo.focus();
        frm.mobileNo.select();
        return;
    }else if(!checkMobile(frm.mobileNo.value))
        {
            alert("Please enter a valid Mobile Number.");
            frm.mobileNo.focus();
            frm.mobileNo.select();
            return;
        }

    if(frm.eMail.value==""){
        alert("Please enter your Email Address!")
        frm.eMail.focus();
        return;
    }else if(!checkEmail(frm.eMail.value)){
        alert("Please enter a valid Email Address.");
        frm.eMail.focus();
        frm.eMail.select();
        return;
    }

    if(frm.Postal.value==""){
        alert("Please Enter your Postal address!");
        frm.Postal.focus();
        return;
    }
    
    if (frm.About.value==""){
        alert("Please Let us know about you!");
        frm.About.focus();
        return;
    }else if(frm.About.length > 1000){
        alert("Please write within 1000 characters!");
        frm.About.focus();
        frm.About.select();
        return;
    }    

    if(confirm("Are you sure you want to Submit the Form ?")){
        frm.submit();
    }
}

function clearForm(){
    if(confirm("Are you sure u want to clear all the fields of the form ?")){
        document.frmRegister.reset();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }else{
        return;
    }
}