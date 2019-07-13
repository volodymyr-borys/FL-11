function reverseNumber(num) {
	var x = 0, y = 0 > num;
	y && (num *= -1);
	while (num > 0) {
	x *= 10;
	x += num % 10;
	num = parseInt(num / 10);
	}
	return y ? -x : x;
}
reverseNumber(123);
