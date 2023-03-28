public class Square {
  public static void main(String[] args){
    Square square = new Square();
    long n = 121;
    System.out.println(square.getSqrt(n));
  }

  public long getSqrt(long n){
    long answer = 0;
    double sqrt = Math.sqrt(n);
    if(sqrt == (long)sqrt){
      answer = ((long)sqrt + 1) * ((long)sqrt + 1);
      return answer;
    }
    return -1;
  }
}
