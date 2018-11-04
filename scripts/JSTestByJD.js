var myHeading = document.querySelector('h1');
myHeading.innerHTML = "Hello World!";

function multiply(num1,num2){
    var result = num1*num2;
    return result;
}

var myHTML = document.querySelector('html')
// myHTML.onclick = function() {
//     alert(multiply(4,5));
// }

var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/WebTestImage_01.png'){
        myImage.setAttribute('src', 'images/WebTestImage_02.png');
    }else{
        myImage.setAttribute('src', 'images/WebTestImage_01.png');
    }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUserName(){ // 타이틀의 이름 바꾸기 함수. 로컬스토리지를 이용!
    var myName = prompt('Please enter your name.'); // 대화상자를 불러오는 함수. OK 버튼을 누르면 값을 Local에 저장.
    localStorage.setItem('name',myName);    // name이라는 항목을 생성 후 저장
    myHeading.innerHTML = 'Mozilla is cool, '+myName;   
    if(!localStorage.getItem('name')){
        setUserName();
    }else{
        var storageName = localStorage.getItem('name');
        myHeading.innerHTML = 'Mozilla is cool, '+storageName;
    }
}

myButton.onclick = function(){
    setUserName();
}

//--------------------------------- 이미지 로드 테스트 부분

function readURL(input) {
 
    if (input.files && input.files[0]) {
        var reader = new FileReader();
 
        reader.onload = function (e) {
            $('#image_section').attr('src', e.target.result);
        }
 
        reader.readAsDataURL(input.files[0]);
    }
}
 
$("#imgInput").change(function(){
    readURL(this);
});
