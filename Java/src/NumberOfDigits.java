public class NumberOfDigits {
  public static void main(String[] args){
    NumberOfDigits numberOfDigits = new NumberOfDigits();
    System.out.println(numberOfDigits.solution(12));
  }

  public int solution(int n) {
    int answer = 0;
    for(int i = 1; i <= n; i++){
      if(n % i == 0) {
        answer += i;
      }
    }

    return answer;
  }
}
