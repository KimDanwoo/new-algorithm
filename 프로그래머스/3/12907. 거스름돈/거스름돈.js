function solution(n, money) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    const MOD = 1000000007;
    
    for (const coin of money) {
        for (let amount = coin; amount <= n; amount ++) {
            dp[amount] = (dp[amount] + dp[amount - coin]) % MOD;
        }
    }
    
    return dp[n];
}