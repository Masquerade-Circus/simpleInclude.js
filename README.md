simpleInclude.js
=================

Smallest 171 bytes Javascript Plugin for include script files reducing the page load time.

## Demo
http://masquerade-circus.net/Plugins/simpleInclude/

##How to use:
Include the plugin or put the contents in a script tag.
There is a IE8 and below compatible version in the source (simpleInlclude.ie8.min.js);
				
##Options:
```javascript
	$i(files[,callback]); 
	$i('file_1.js','file_2.js','file_n.js',function(){ 
			// Some awesome code here 
	});
```

##Note:
The EvanHahn's [ScriptInclude](https://github.com/EvanHahn/ScriptInclude) Plugin inspired this plugin.

# Legal

Author & copyright (c) 2013: [Masquerade Circus](http://masquerade-circus.net)
Dual [MIT](http://opensource.org/licenses/MIT) & [GPLv2](http://opensource.org/licenses/GPL-2.0) license
