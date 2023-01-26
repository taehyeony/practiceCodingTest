function solution(name){
    let answer = 0;
    let nameProcessing = initName(name.length);
    
    let checkAResult = checkA(name);
    let continuousA = Math.floor(checkAResult/100);
    let locationAStart = checkAResult%100;
    let locationAFinish = locationAStart + continuousA
    if(locationAFinish>=name.length){
        locationAFinish-=name.length;
    }

    //알파벳 변경 횟수
    for(let i=0;i<name.length;i++){
        answer += changeName(name[i]);
    }
    console.log("-----------------");
    console.log(locationAStart);
    console.log(locationAFinish);
    console.log(name.length);
    
    if(continuousA==name.length){ // 전체가 다 A인 경우
        answer = 0;
    } else if(continuousA==0) {
        answer = answer + name.length - 1;
    } else if(name[0]=='A'){ // 첫 글자가 A인 경우
        if(locationAStart<locationAFinish){ //AAA로 시작해서 다른 알파벳으로 끝나는 경우
            answer = answer + name.length - continuousA;
        } else {//AA로 다른 알파벳이 둘러 쌓인 경우
            if(name.length - locationAStart < locationAFinish){//왼쪽으로 가는게 빠를 경우
                answer = answer + name.length - continuousA + name.length - locationAStart;
            } else { //오른쪽으로 가는게 빠를 경우
                answer = answer + name.length - continuousA + locationAFinish - 1;
            }
        }   
    } else { //첫 글자가 A가 아닌 경우
        if(locationAStart>name.length - locationAFinish){ //왼쪽으로 갔다가 오른쪽으로 가는게 빠를 경우
            if(name.length-locationAFinish>continuousA){//연속된 a를 지나가는게 더 빠를 경우
                answer = answer + name.length - 1;
            } else { //왼쪽으로 갔다가 다시 오른쪽으로 돌아오는 경우
                answer = answer + name.length - 1 - continuousA + name.length - locationAFinish;
            }
        } else { //오른쪽으로 갔다가 왼쪽으로 가는게 빠를 경우
            if(locationAStart>continuousA){
                answer = answer + name.length - 1;
            } else {
                answer = answer + name.length - 1 - continuousA + locationAStart - 1;
            }
        }
    }
    console.log(answer);
    return answer;
}

/**
 * A로 배열 초기화
 * @param {*} nameLength 
 * @returns 
 */
function initName(nameLength){
    let initializedName = new Array();
    for(let i=0;i<nameLength;i++){
        initializedName.push("A");
    }
    return initializedName;
}

/**
 * 알파벳 변경
 * @param {*} alphabet 
 * @returns 
 */
function changeName(alphabet){
    if(alphabet.charCodeAt(0)<=77){
        return alphabet.charCodeAt(0) - 65;
    } else {
        return 91 - alphabet.charCodeAt(0);
    }
}

/**
 * A가 이어진 최대개수
 * @param {*} name 
 * @returns 
 */
function checkA(name){
    let counter = 0;
    let location = 0;
    let counter_Max = 0;
    let doubleName = name.concat(name);
    for(let i=0;i<name.length;i++){
        let j=i;
        while (doubleName[j++] == "A") {
            counter++;
            if(counter>= name){
                break;
            }
        }
        if (counter > counter_Max) {
            if(counter>name.length){
                counter = name.length;
            }
            counter_Max = counter;
            counter = 0;
            location = i;
        } else {
            counter = 0;
        }
    }
    return counter_Max*100+location;
}

solution("BAAABBBB");