function solution(name){
    let answer = 0;
    let move = name.length - 1;

    for(let i=0;i<name.length;i++){
        answer += changeName(name[i]);
        if (name[i+1] == 'A') {//다음 글자가 A인 경우
            let finishA = i + 1;
            while (name[finishA] == "A") { //A가 안나올때까지
                finishA++;
            }
            move = Math.min(move, i * 2 + (name.length - finishA));// 오른쪽 왼쪽
            move = Math.min(move, i + (name.length - finishA) * 2);// 왼쪽 오른쪽
        }
    }
    console.log(answer + move);
    return answer + move;
}

function changeName(alphabet) {
    if (alphabet.charCodeAt(0) <= 77) {
        return alphabet.charCodeAt(0) - 65;
    } else {
        return 91 - alphabet.charCodeAt(0);
    }
}
solution("JAN");