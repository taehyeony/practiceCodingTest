import java.util.*;

public class Solution {
    public static int[] solution(int []arr) {
        int[] answer = {};
        
        Stack<Integer> stack = new Stack<>();
        stack.push(arr[0]);
        for(int i=1;i<arr.length;i++) {
        	if(stack.peek()!=arr[i]) {
        		stack.push(arr[i]);
        	}
        }
        answer = new int[stack.size()];
        
        for(int i=answer.length-1;i>=0;i--) {
        	answer[i] = stack.pop();
        }
        return answer;
	}
}