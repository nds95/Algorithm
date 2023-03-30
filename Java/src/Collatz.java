public class Collatz {
  public static void main(String[] args){
    Collatz collatz = new Collatz();
    int num = 626331;
    System.out.println(collatz.solution(num));

  }

  public int solution(int num){
    int answer = 0;
    long n = num;
    while((n != 1)){
      if((n % 2) == 0){
        n /= 2;
      } else {
        n = n * 3 + 1;
      }

      answer++;
    }
    return answer >= 500 ? -1 : answer;
  }
}
