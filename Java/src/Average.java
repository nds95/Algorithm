public class Average {
  public static void main(String[] args){
    Average average = new Average();
    int[] arr = new int[]{1, 2, 3, 4};
    System.out.println(average.solution(arr));
  }

  public double solution(int[] arr) {
    double answer = 0;
    for(int i = 0, len = arr.length; i < len; i++){
      answer += arr[i];
    }
    return answer / arr.length;
  }
}
