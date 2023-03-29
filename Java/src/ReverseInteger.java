public class ReverseInteger {
  public static void main(String[] args){
    ReverseInteger reverseInteger = new ReverseInteger();
    long n = 12345;
    System.out.println(reverseInteger.solution(n));
  }

  public int[] solution(long n) {
    String[] strArr = String.valueOf(n).split("");
    int[] answer = new int[strArr.length];
    for(int i = 0, len = strArr.length; i < len; i++){
      int num = Integer.parseInt(strArr[strArr.length - 1 - i]);
      answer[i] = num;
    }

    return answer;
  }
}
