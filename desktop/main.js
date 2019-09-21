global.msg = [];
try{
	const tedious = require('tedious');
	Object.defineProperties(global, {
		tedious: {value: tedious}
	});
}catch(err){
	global.msg.push(err);
};
if('nw' in this){
	//const url = 'http://localhost:5000/';
	//const url = 'https://powerstrip.texponential.com/';

	const url = 'https://powerstrip.texponential.com/';
	nw.Window.open(url, {
			"id": "powerstrip"
			,"title": "Powerstrip"
			,"width": 1024
			,"height": 768
			,"min_width": 300
			,"min_height": 300
	}, (win)=>{
		/* NOTE
		nw.Window.get() === win === window.nw.Window.get();
		in browser:
		window.nw.Window.get().window === window
		*/ 
		if(global.msg.length) console.log(global.msg);

		if(/localhost|127\.0/.test(url)){
			win.showDevTools();
		}
win.showDevTools();

	});
};
