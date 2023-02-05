/*
    프로그래머스 이분탐색 입국심사
    https://school.programmers.co.kr/learn/courses/30/lessons/43238
 */
import java.util.Arrays;

public class Solution {

	public static long solution(int n, int[] times) {
        long answer = 0;
        Arrays.sort(times);
        long min = times[0], max = (long)times[times.length - 1];//min 1명 심사에 필요한 최소 시간, max 1명 심사에 필요한 최대 시간
        long left = min, right = max*n;//left 총 심사에 필요한 최소 시간,right 총 심사에 필요한 최대 시간
        System.out.println("left : " + left + ", right : " + right + ", n : " + n);
        
        //이분 탐색
        while(left<=right) {
        	long mid = (left+right)/2;
        	long people = 0;//모든 심사관들이 mid분 동안 심사할 수 있는 인원 
        	for(int i=0;i<times.length;i++) {
        		people += mid/times[i];
        		if(people>n) { //루프를 돌다 people이 n보다 커지면 탈출
        			break;
        		}
        	}
        	if(people>=n) {
        		answer = mid;
        		right = mid - 1;
        	} else {
        		left = mid + 1;
        	}
        }
        return answer;
    }
}