public class CreateWaterMalon {
  public static void main(String[] args){
    CreateWaterMalon createWaterMalon = new CreateWaterMalon();
    int n = 3;
    System.out.println(createWaterMalon.solution(n));
  }
  public String solution(int n){
    String answer = "";
    for(int i = 0; i < n; i++){
      if((i % 2) == 0){
        answer += "수";
        continue;
      }
      answer += "박";
    }
    return answer;
  }
}
