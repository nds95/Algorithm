public class DivisionResultOne {
  public static void main(String[] args){
    DivisionResultOne divisionResultOne = new DivisionResultOne();
    int n = 10;
    System.out.println(divisionResultOne.solution(n));
  }

  public int solution(int n){
    int answer = 0;
    for(int i = 1; i < n; i++){
      if((n % i) == 1){
        answer = i;
        break;
      }
    }
    return answer;
  }
}
