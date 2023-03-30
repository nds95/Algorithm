public class SumOfTwoInteger {
  public static void main(String[] args){
    SumOfTwoInteger sumOfTwoInteger = new SumOfTwoInteger();
    int a = 3;
    int b = 3;
    System.out.println(sumOfTwoInteger.solution(a, b));
  }

  public long solution(int a, int b){
    long answer = 0;
    if(a == b){
      return a;
    }
    int biggerNum = a > b ? a : b;
    int smallerNum = a < b ? a : b;
    for(int i = smallerNum; i <= biggerNum; i++){
      answer += i;
    }
    return answer;
  }
}
