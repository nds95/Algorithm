public class StringToInteger {
  public static void main(String[] args){
    StringToInteger stringToInteger = new StringToInteger();
    String s = "+1234";
    System.out.println(stringToInteger.solution(s));
  }

  public int solution(String s){
    return Integer.parseInt(s);
  }
}
