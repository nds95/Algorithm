public class OddEven {
    public static void main(String[] args){
        System.out.println(solution(3));
    }
    public static String solution(int num) {
        if(num % 2 == 0) {
            return "Even";
        } else {
            return "Odd";
        }
    }
}