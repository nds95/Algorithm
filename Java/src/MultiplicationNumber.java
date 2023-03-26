import java.util.Arrays;

public class MultiplicationNumber {
  public static void main(String[] args){
    MultiplicationNumber multiplicationNumber = new MultiplicationNumber();
    int x = 2;
    int n = 5;
    System.out.println(multiplicationNumber.solution(x, n));
  }

  public long[] solution(int x, int n){
    long[] answer = new long[5];
    for(int i = 1; i <= n; i++){
      answer[i - 1] = ((long)i) * x;
    }
    return answer;
  }
}
