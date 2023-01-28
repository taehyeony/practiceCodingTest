/*
    프로그래머스 Greedy 큰 수 만들기
    https://school.programmers.co.kr/learn/courses/30/lessons/42883
*/
let answer = new Array();
function solution(number, k) { //number은 숫자 k는 제외할 자리수
    let count = number.length-k;
    while(count>0){
        let max = number[0];
        let location = 0;
        for(let i=1;i<count;i++){
            if(number[i]>max){
                max = number[i];
                location = i;
                if(max == 9){
                    break;
                }
            }
        }
        answer.push(max);
        number = number.slice(location+1);
        count--;
    }
  
  return answer.join('');
}

console.log(solution(1924,2));