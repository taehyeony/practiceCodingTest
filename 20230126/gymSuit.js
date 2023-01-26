/*
    프로그래머스 GREEDY 체육복
    https://school.programmers.co.kr/learn/courses/30/lessons/42862
*/

function solution(n, lost, reserve) {
    var answer = 0;
    let overlap = compare(lost, reserve);
    let afterLost = popIndex(lost, overlap);
    let afterReserve = popIndex(reserve, overlap);
    for (let i = 0; i < afterReserve.length; i++) {
        if (afterLost.includes(afterReserve[i] - 1)) {
            deleteIndex(afterLost,afterReserve[i] - 1);
            console.log("pop : " + (afterReserve[i] - 1));
        } else if (afterLost.includes(afterReserve[i] + 1)) {
            deleteIndex(afterLost, afterReserve[i] + 1);
            console.log("pop : " + (afterReserve[i] + 1));
        }
    }
    console.log(afterLost);
    answer = n - afterLost.length;
    return answer;
}

function compare(a, b) {
    return a.filter((it) => b.includes(it));
}

function popIndex(a, b) {
    return a.concat(b).filter((it) => !a.includes(it) || !b.includes(it));
}

function deleteIndex(a,b){
    for(let i=0;i<a.length;i++){
        if(a[i]===b){
            a.splice(i,1);
        }
    }
}


solution(6,[1,3,5,6],[2,3,4]);