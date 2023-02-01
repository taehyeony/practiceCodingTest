/*
    프로그래머스 Greedy 구명보트
    https://school.programmers.co.kr/learn/courses/30/lessons/42885
 */

import java.util.Arrays;

public class Solution {
   
   public static int solution(int[] people,int limit) {
      int answer = 0;
      Arrays.sort(people);//오름차순 정렬
      int start = 0, end = people.length-1;
      while(start<=end) {
    	  if(people[start]+people[end]<=limit) {
    		  start++;
    	  }
    	  end--;
    	  answer++;
      }
      return answer;
   }

}