function test(delay, callback){
  setTimeout(function(){
    callback();
  },delay);
}

console.log("start");

test(1000, function(){
  console.log("callback1");
})

test(1000, function(){
  console.log("callback2");
})

/*
1. "start" 실행 -js
2. 첫번째 test() 함수 실행  -js
3. 첫번째 test() 함수 안쪽의 setTimeout을 web api에게 전달
4. 2초뒤 setTimeout 실행 -web api
5. console.log("callback1"), 두번째 test()함수를 callstack에 전달
6. callstack이 "callback1" 실행, 두번째 test() 함수 실행.
7. 두번째 test() 함수 안쪽의 setTimeout을 web api에게 전달 
위의 단계 반복

콜백을 통한 동기화 방식의 원리는
순차적으로 실행할 모든 함수들을 하나의 callback함수에 넣어서
콜스택이 다음에 실행할 함수가 없도록 만듬
단점 - 코드의 뎁스가 깊어지면서 지저분해짐 (callback hell)
*/