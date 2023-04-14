public class AddDigitsNum {
  public static void main(String[] args){
    AddDigitsNum addDigitsNum = new AddDigitsNum();
    int left = 13;
    int right = 17;
    System.out.println(addDigitsNum.solution(left, right));
  }

  public int solution(int left, int right){
    int answer = 0;

    for(int i = left; i <= right; i++){
      int num = 2;
      for(int j = 2; j < i; j++){
        if((i % j) == 0){
          num++;
        }
      }

      if((num % 2) == 0){
        answer += i;
      } else {
        answer -= i;
      }
    }
    return answer;
  }
}
