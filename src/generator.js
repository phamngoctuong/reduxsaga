function* lionel() {
	while(true) {
		yield "aaaaaaaaaaaaaa 1";
	}
}
const result = lionel();
console.log(result.next());
console.log(result.next());