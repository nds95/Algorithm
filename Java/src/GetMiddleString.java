public class GetMiddleString {
  public static void main(String[] args){
    GetMiddleString getMiddleString = new GetMiddleString();
    String s = "qwer";
    System.out.println(getMiddleString.solution(s));
  }

  public String solution(String s){
    String answer = "1";
    int sLen = s.length();
    String[] sArr = s.split("");
    if(sLen % 2 == 0){
      answer += sArr[(sLen / 2) - 1];
      answer += sArr[sLen / 2];
    } else {
      answer += sArr[(sLen - 1) / 2];
    }
    return answer;
  }
}
