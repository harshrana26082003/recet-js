function check_form_validation(){
    let fname=document.form1.fname.value;
    if(fname ==""){
        document.getElementById("fmsg").innerHTML="please enter your first name"
        return false;
    }else if(!isNaN(fname)){
        document.getElementById("fmsg").innerHTML="please enter only alaphabet"
        return false;
    }
    let Mname=document.form1.Mname.value;
    if(Mname ==""||Mname ==null){
        document.getElementById("Mname_msg").innerHTML="please enter your Middle name"
        return false;
    }else if(!isNaN(Mname)){
        document.getElementById("Mname_msg").innerHTML="please enter only alaphabet"
        return false;
    }
    let Lname=document.form1.Lname.value;
    if(Lname ==""||Lname ==null){
        document.getElementById("Lname_msg").innerHTML="please enter your Last name"
        return false;
    }else if(!isNaN(Lname)){
        document.getElementById("Lname_msg").innerHTML="please enter only alaphabet"
        return false;
    }
    let male = document.form1.gen[0].checked;
    let female = document.form1.gen[1].checked;
    if(male == false && female == false){
        document.getElementById("gender_msg").innerHTML ="select gender";
        return false;
    }

    
    let c1 = document.form1.c1.checked;
    let c2 = document.form1.c2.checked;
    let c3 = document.form1.c3.checked;

    if(c1==false&&c2==false&&c3==false){
        document.getElementById("Subject_msg").innerHTML ="select subject"
        return false;
    }

    let exp = document.form1.exp.value;

    if(exp == -1){
     document.getElementById("exp_msg").innerHTML ="please select your Experiance"
     return false;
    }
//    let mail=document.form1.mail.value;
//    if(mail == ""){
//     document.getElementById("mail_msg").innerHTML ="Enter Your e-mail"
//     return false
//    }
//    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))){
//     document.getElementById("mail_msg").innerHTML =" Your e-mail is not valid"
//     return false;
//    }
//    else{
//    return true;
//    }

   let mno = document.form1.nmo.value;
   if (mno == ""){
    document.getElementById("msg_mno").innerHTML="enter your mobile no";
    return false
   }
   else if (isNaN (mno)){
    document.getElementById("msg_mno").innerHTML=" you enter alaphabets";
    return false;
   }
   else if(mno.length<10){
    document.getElementById("msg_mno").innerHTML=" mobile no is less then 10 digites";
    return false;
   }

   let pwd = document.from1.sec.value;
                 if(pwd == ""){
        document.getElementById("pmsg").innerHTML="enter your password"
        return false
    }

}


function hide_show(){

    let password =document.getElementById("sec");
            if(password.type =="password"){
                password.type ="text";
            }
            else{
                password.type = "password"
            }
}