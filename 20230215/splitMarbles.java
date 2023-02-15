/*
    프로그래머스 코딩테스트 입문 구슬을 나누는 경우의 수
    https://school.programmers.co.kr/learn/courses/30/lessons/120840
 */

 class Solution {
    public long solution(int balls, int share) {
        long answer = 0;
        if(balls/2>=share) {
        	answer = nPr(balls,share);
        } else {
        	answer = nPr(balls,balls-share);
        }
        return answer;
    }
	
	static long nPr(int n,int r) {
		long numerator = 1;
		long denominator = 1;
		for(int i=0;i<r;i++) {
			numerator*=n-i;
			denominator*=r-i;
			if(GCD(numerator,denominator)!=1) {
				long temp = GCD(numerator,denominator); 
				numerator/=temp;
				denominator/=temp;
			}
			
		}
		return numerator/denominator;
	}
	static long GCD(long a,long b) {
		if(a%b==0) {
			return b;
		} else {
			return GCD(b,a%b);
		}
	}
}