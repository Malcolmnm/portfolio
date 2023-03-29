function corp(no){
    //공정거래위원회 api 서버와 동기화함
    window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no="+no,"","width==500 height=500");
}

function btn(){
    if(fmm.event_user.value == ""){
        alert("참여자 이름을 입력하시오.")
    }
    else{
        if(fmm.event_email.value == ""){
            alert("이메일 주소를 입력해주세요.")
        }
        else{
            if(fmm.event_tel.value == ""){
                alert("휴대폰 번호를 입력해주세요.")
            }
            else{
                if(fmm.event_number.value == ""){
                    alert("티켓번호를 입력해주세요.")
                }
                else if(fmm.event_number.value.length < 8){
                    alert("티켓번호는 8자리입니다.")
                }
                else{
                    if(fmm.event_check.checked == false){
                        alert("이용약관에 동의해주세요.")
                    }
                    else{
                        fmm.submit();
                    }
                }
            }
        }
    }
}
function cgv_real(){
    location.href = "http://www.cgv.co.kr";
}