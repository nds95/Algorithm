import java.util.Arrays;

public class IntSort {
  public static void main(String[] args){
    IntSort intSort = new IntSort();
    long n = 118372;
    System.out.println(intSort.solution(n));
  }

  public long solution(long n){
    String str = String.valueOf(n);
    char[] chars = str.toCharArray();
    Arrays.sort(chars);
    StringBuilder stringBuilder = new StringBuilder();
    stringBuilder.append(chars);
    String reversed = stringBuilder.reverse().toString();
    return Long.parseLong(reversed);
  }
}
