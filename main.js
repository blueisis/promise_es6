 function test(){
   setTimeout(function(){
     console.log("타이머 끝");
   }, 1000);

   for(let i=0; i<4; i++){
     console.log(i);
   }

   console.log("for문 끝");
}

test();
console.log("메인끝");

/*
실제 자바스크립트엔진에서의 실행흐름
1.callstack에서 먼저 test()함수 호출
2.test()함수 안쪽의 setTimeout을 wep_api에게 전달하고 바로 다음 업무 실행
3.바로 그 다음 for문실행
4.for문이 완료되면 console.log("for문 끝 실행")
5.test함수 안쪽의 코드를 모두 실행한 뒤 마지막으로 "메인끝"실행
6.web api가 setTimeout을 실행하고 다시 안쪽의 "타이머끝을" callabck queue에 전달
7.최종적으로 "타이머 끝"이 제일 마지막에 callstack에 전달되서 실행
*/