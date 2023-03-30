public class HasardNumber {
  public static void main(String[] args){
    HasardNumber hasardNumber = new HasardNumber();
    int x = 11;
    System.out.println(hasardNumber.solution(x));
  }

  public boolean solution(int x){
    int sum = 0;
    String[] str = String.valueOf(x).split("");
    for(int i = 0; i < str.length; i++){
      int intNum = Integer.parseInt(str[i]);
      sum += intNum;
    }
    boolean answer = true;
    if((x % sum) != 0){
      answer = false;
    }
    return answer;
  }
}
