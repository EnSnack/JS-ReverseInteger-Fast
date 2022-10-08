/**
 * @param {number} x
 * @return {number}
 */
console.time("max")
const reverse = function(x) {
	if(x===0) return 0
	let NUM = 0;
	while(x!==0) {
		NUM = (NUM*10) + x%10;
		if(NUM < -0x80000000 || NUM > 0x7fffffff) return 0;
		x = (x/10) << 0;
	}
	return (NUM);
};
console.log(reverse(123) == 321)
console.log(reverse(-333) == -333)
console.log(reverse(2147483645) == 0)
console.log(reverse(654321234) == 432123456)
console.log(reverse(-35853) == -35853)
console.log(reverse(34567) == 76543)
console.log(reverse(66113) == 31166)
console.log(reverse(224466) == 664422)
console.log(reverse(-2147483645) == 0)
console.log(reverse(0) == 0)
console.timeEnd("max")