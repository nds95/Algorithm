public class GetDot {
  public static void main(String[] args) {
    GetDot getDot = new GetDot();
    int[] a = {1, 2, 3, 4};
    int[] b = {-3, -1, 0, 2};
    System.out.println(getDot.solution(a, b));
  }

  public int solution(int[] a, int[] b){
    int answer = 0;
    for(int i = 0, len = a.length; i < len; i++){
      answer += a[i] * b[i];
    }
    return answer;
  }
}