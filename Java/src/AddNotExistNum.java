import java.util.Arrays;

public class AddNotExistNum {
  public static void main(String[] args){
    AddNotExistNum addNotExistNum = new AddNotExistNum();
    int[] numbers = {1, 2, 3, 4, 6, 7, 8, 0};
    System.out.println(addNotExistNum.solution(numbers));
  }

  public int solution(int[] numbers){
    int answer = 0;
    Arrays.sort(numbers);
    for(int i = 0; i < 10; i++){
      System.out.println(Arrays.binarySearch(numbers, i));
      if(Arrays.binarySearch(numbers, i) < 0){
        answer += i;
      }
    }
    return answer;
  }
}
