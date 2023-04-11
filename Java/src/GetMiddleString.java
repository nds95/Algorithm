public class GetMiddleString {
  public static void main(String[] args){
    GetMiddleString getMiddleString = new GetMiddleString();
    String s = "qwer";
    System.out.println(getMiddleString.solution(s));
  }

  public String solution(String s){
    String answer = "";
    int sLen = s.length();
    String[] sArr = s.split("");
    if(sLen % 2 == 0){
      System.out.println("짝수");
      answer += sArr[(sLen / 2) - 1];
      answer += sArr[sLen / 2];
    } else {
      System.out.println("홀수");
      answer += sArr[(sLen - 1) / 2];
    }
    return answer;
  }
}
