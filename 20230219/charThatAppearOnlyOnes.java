/*
    프로그래머스 코딩테스트 입문 한 번만 등장한 문자
    https://school.programmers.co.kr/learn/courses/30/lessons/120896
 */
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
class Solution {
    public static String solution(String s) {
        String answer = "";
        HashMap<String, Integer> alpMap = new HashMap<>();
        ArrayList alpList = new ArrayList();
        for(int i=0;i<s.length();i++) {
        	if(alpMap.containsKey(String.valueOf(s.charAt(i)))) {
        		alpMap.replace(String.valueOf(s.charAt(i)), 2);
        	} else {
        		alpMap.put(String.valueOf(s.charAt(i)),1);
        	}
        	
        }
        for (HashMap.Entry<String, Integer> pair : alpMap.entrySet()) {
        	  if(pair.getValue()==1) {
        		  alpList.add(pair.getKey());
        	  }
        }
        alpList.sort(Comparator.naturalOrder());
        return answer.join("", alpList);
    }
}