function solution(bandage, health, attacks) {
    const [t, x, y] = bandage
    let curHealth = health
    let continuousHeal = 0
    let tick = 0
    while(attacks.length) {
        tick++
        const [attackTime, damage] = attacks[0]
        if(attackTime === tick) {
            attacks = attacks.slice(1)
            curHealth -= damage
            continuousHeal = 0
            
            if(curHealth <= 0) return -1   
        } else {
            curHealth += x
            continuousHeal++

            if(curHealth >= health) {
                curHealth = health
                continue
            } 

            if(continuousHeal >= t) {
                curHealth += y
                continuousHeal = 0
            }
        }
    }
    
    return curHealth
}