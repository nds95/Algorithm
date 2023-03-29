public class StringCount {
  public static void main(String[] args){
    StringCount stringCount = new StringCount();
    String s = "pPoooyY";
    System.out.println(stringCount.solution(s));
  }

  public boolean solution(String s){
    s = s.toLowerCase();
    int pCount = 0;
    int yCount = 0;
    char[] arr = s.toLowerCase().toCharArray();
    for(int i = 0, len = arr.length; i < len; i++){
      char str = arr[i];
      if(str == 'p'){
        pCount++;
      }
      if(str == 'y'){
        yCount++;
      }
    }

    return pCount == yCount;
  }
}
