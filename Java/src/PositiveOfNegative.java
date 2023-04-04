public class PositiveOfNegative {
  public static void main(String[] args){
    PositiveOfNegative positiveOfNegative = new PositiveOfNegative();
    int[] absolutes = {4, 7, 12};
    boolean[] signs = {true, false, true};
    System.out.println(positiveOfNegative.solution(absolutes, signs));
  }

  public int solution(int[] absolutes, boolean[] signs){
    int answer = 0;
    for(int i = 0, len = absolutes.length; i < len; i++){
      if(signs[i]){
        answer += absolutes[i];
      } else {
        answer -= absolutes[i];
      }
    }
    return answer;
  }
}