function pad(s,z){
	var f=String,r=f(s).trim(),l='length',n=z[l];
	if(n>0){z=f(z);l=Math.max(n-r[l],0);if(l>0){r=z.substr(0,l)+s}};
	return r
}


console.log(pad(123456,'abcdefghilm'));
console.log(pad(10,'000'));
console.log(pad(1000,'00'));
