let answer = 9;
function solution(N, number) {
    let count = 0;

    dfs(0, 0, N, number);

  if (answer > 8) {
    answer = -1;
  }

  console.log(answer);

  return answer;
}

function dfs(currentValue, depth, N, number) {
  if (depth > answer) {
    return;
  }
  if (currentValue == number) {
    answer = Math.min(answer, depth);
    return;
  }

  let connectN = N;
  for(let i=0;i<8-depth;i++){
    dfs(currentValue + connectN, depth + i + 1, N, number); //더하기
    dfs(currentValue - connectN, depth + i + 1, N, number); //빼기
    dfs(currentValue * connectN, depth + i + 1, N, number); //곱하기
    dfs(currentValue / connectN, depth + i + 1, N, number); //나누기
    connectN = connectN*10+N;
  }

}

solution(2,11);
