import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Stream;

public class Divisor {
  public static void main(String[] args){
    Divisor divisor = new Divisor();
    int[] arr = {5, 9, 7, 10};
    int divisor1 = 5;
    System.out.println(divisor.solution(arr, divisor1));

  }

  public int[] solution(int[] arr, int divisor){
    int[] answer = Arrays.stream(arr).filter(num -> num % divisor == 0).toArray();

    return answer;
  }
}
