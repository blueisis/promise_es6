function test(delay, callback){
  setTimeout(function(){
    callback();
  },delay);
}

test(1000, function(){
  console.log("callback1");
})

/*
1. "start" 실행 -js
2. 첫번째 test()실행 -js
3. test 함수 안쪽의 setTimeout -web api 전달
4. 두번째 test()실행 -js
5. test 함수 안쪽의 setTimeout -web api 전달
6. 세번째 test()실행 -js
7. test 함수 안쪽의 setTimeout -web api 전달
8. console.log("end")실행 -js
9. 1초 뒤에 setTimeout 실행하고 "callback1" -callstak에 전달 -web
10. 1초 뒤에 setTimeout 실행하고 "callback2" -callstak에 전달 -web
11. 1초 뒤에 setTimeout 실행하고 "callback3" -callstak에 전달 -web

출력

start
end
callback1
callback2
callback3

*/ 