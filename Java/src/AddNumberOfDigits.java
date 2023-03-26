import java.io.File;

public class AddNumberOfDigits {
  public static void main(String[] args){
    AddNumberOfDigits addNumberOfDigits = new AddNumberOfDigits();
    int n = 123;
    System.out.println(addNumberOfDigits.solution(n));
  }

  public int solution(int n){
    int answer = 0;
    String str = String.valueOf(n);
    String[] strArray = str.split("");
    for(String el : strArray){
      int num = Integer.parseInt(el);
      answer += num;
    }
    return answer;
  }
}
