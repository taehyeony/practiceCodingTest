/*
    프로그래머스 코딩테스트 입문 옹알이(1)
    https://school.programmers.co.kr/learn/courses/30/lessons/120956
 */

 class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        String[] babbe = {"aya", "ye", "woo", "ma"};
        for(int i=0;i<babbling.length;i++) {
        	for(int j=0;j<4;j++){
             	if(babbling[i].indexOf(babbe[j])!=-1) {
             		babbling[i] = babbling[i].replaceFirst(babbe[j], " ");	
             	}
        	}
        	if(isStringEmpty(babbling[i])) {
        		  answer++;
        	}
        }
        return answer;
    }
	static boolean isStringEmpty(String str) {
        return str == null || str.trim().length() == 0;
    }
}