import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;

public class RemoveMinNum {
  public static void main(String[] args){
    RemoveMinNum removeMinNum = new RemoveMinNum();
    int[] arr = {4, 3, 2, 1};
    System.out.println(removeMinNum.solution(arr));
  }

  public int[] solution(int[] arr){
    if(arr.length < 2){
      int[] newArr = {-1};
      return newArr;
      
    }
    int minInt = Arrays.stream(arr).min().getAsInt();
    int[] answer = new int[arr.length - 1];
    Arrays.sort(arr);
    int j = 0;
    for(int i = 0; i < arr.length; i++){
      if(arr[i] != minInt){
        answer[j] = arr[i];
        j++;
      }
    }
    return answer;
  }
}
