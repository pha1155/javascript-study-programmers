/*
[문제 설명]
머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다.
피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

[제한사항]
1 ≤ n ≤ 100

[입출력 예]
n	result
7	1
1	1
15	3
*/

function solution(n) {
    return Math.ceil(n / 7);
}

// Math.ceil() 정적 메서드는 언제나 올림하여 주어진 숫자보다 크거나 같은 가장 작은 정수를 반환합니다.