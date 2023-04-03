public class HidePhoneNumber {
  public static void main(String[] args){
    HidePhoneNumber hidePhoneNumber = new HidePhoneNumber();
    String phone_number = "01033334444";
    System.out.println(hidePhoneNumber.solution(phone_number));
  }

  public String solution(String phone_number){
    String answer = "";
    String[] arr = phone_number.split("");
    int hideIndex = arr.length - 4;
    for(int i = 0, len = arr.length; i < len; i++){
      if(i < hideIndex){
        answer += "*";
        continue;
      }
      answer += arr[i];
    }
    return answer;
  }
}
