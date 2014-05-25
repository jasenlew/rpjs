$(document).ready(function() {

	var parseApplicationId="U8MFaSZy20ax7XHwRjTzNtBowGZu1QAxCSGfZL1b";
	var parseJavaScriptKey="r1pWArz8gIRSuZQkVMkOoCujyX8vWUzLehCwmnrb";

	Parse.initialize(parseApplicationId, parseJavaScriptKey);

	var Test = Parse.Object.extend("Test");
	var test = new Test();

	test.save(
		{ name: "John", text: "hi" },
		
		{
			success: function(object) {
				console.log("Parse.com object is saved: " + object);
			},
			
			error: function(object) {
				console.log("ERROR!  Parse.com object is NOT saved: " + object);
			}
		}
	);
});