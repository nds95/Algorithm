public class FindKim {
  public static void main(String[] args){
    FindKim findKim = new FindKim();
    String[] seoul = {"Jane", "Kim"};
    System.out.println(findKim.solution(seoul));
  }

  public String solution(String[] seoul){
    String answer = "";
    for(int i = 0, len = seoul.length; i < len; i++){
      if(seoul[i].equals("Kim")){
        answer = String.format("김서방은 %s에 있다.", i);
        break;
      }
    }
    return answer;
  }
}
