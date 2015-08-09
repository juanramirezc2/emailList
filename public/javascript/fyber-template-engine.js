(function(root,undefined){
 var Hrender= function(html, options) {
	    var re = /<F([^F>]+)?F>/g, reExp = /(^( )?(for|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0, match;
	    var add = function(line, js) {
	        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
	            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
	        return add;
	    }
	    while(match = re.exec(html)) {
	        add(html.slice(cursor, match.index))(match[1], true);
	        cursor = match.index + match[0].length;
	    }
	    add(html.substr(cursor, html.length - cursor));
	    code += 'return r.join("");';
	    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
}
root.HugeRender=Hrender;
})(this);





