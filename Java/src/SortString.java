import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SortString {
  public static void main(String[] args){
    SortString sortString = new SortString();
    String s = "Zbcdefg";
    System.out.println(sortString.solution(s));
  }

  public String solution(String s){
    String[] sArr = s.split("");
    String answer = Stream.of(sArr).sorted(Comparator.reverseOrder()).collect(Collectors.joining());
    
    return answer;
  }
}
