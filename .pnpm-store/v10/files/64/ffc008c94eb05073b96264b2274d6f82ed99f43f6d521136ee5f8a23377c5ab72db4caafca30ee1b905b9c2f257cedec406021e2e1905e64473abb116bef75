
function htmlEqual(a, b) {
	a = a.toLowerCase().replace(/[\r\n]/g,'');
	b = b.toLowerCase().replace(/[\r\n]/g,'');
	// IE replace things like `class="f"` with `class=f`, so let's just
	// do it, by default, in the comparee string
	a = a.replace(/="([^"]+)"/g, '=$1');
	b = b.replace(/="([^"]+)"/g, '=$1');
	return equal(a, b); // IE caps <TAGs>s
}

module('Basics');

test('Element boundary arsenal', function() {

	var tests = {
		'TEST': '<x>TEST</x>',
		'T<em>EST</em>': '<x>T</x><em><x>EST</x></em>',
		'<div>TEST</div>': '<div><x>TEST</x></div>',
		'<i>T</i><b>E</b><u>S</u><i>T</i>': '<i><x>T</x></i><b><x>E</x></b><u><x>S</x></u><i><x>T</x></i>',
		'<i>T</i><u>EST ok</u>': '<i><x>T</x></i><u><x>EST</x> ok</u>',
		'<i>ok T</i><em>EST</em>': '<i>ok <x>T</x></i><em><x>EST</x></em>',
		'<i>ok <i><b>T</b></i></i><em>EST</em>': '<i>ok <i><b><x>T</x></b></i></i><em><x>EST</x></em>'
	};

	var d = document.createElement('div');

	for (var t in tests) {
		d.innerHTML = t;
		findAndReplaceDOMText(d, { find: /TEST/, wrap: 'x' });
		htmlEqual(d.innerHTML, tests[t]);
		d.innerHTML = t;
		var f = findAndReplaceDOMText(d, { find: /TEST/g, wrap: 'x' });
		htmlEqual(d.innerHTML, tests[t]);
		f.revert();
		htmlEqual(d.innerHTML, t);
	}

});

module('Finding');

test('String match', function() {

	var text = 'this is a ??te<i>st</i>';
	var d = document.createElement('div');

	d.innerHTML = text;
	findAndReplaceDOMText(d, { find: '??test', wrap: 'x' });
	htmlEqual(d.innerHTML, 'this is a <x>??te</x><i><x>st</x></i>');

});

test('Variable length RegExp matches', function() {
	var d = document.createElement('div');
	for (var i = 0; i < 100; ++i) {
		d.innerHTML = Array(i + 1).join('<em>x</em>');
		findAndReplaceDOMText(d, { find: /x+/, wrap: 'z' });
		htmlEqual(d.innerHTML, Array(i + 1).join('<em><z>x</z></em>'))
	}
});

test('Only output specified groups', function() {

	var text = 'TEST TESThello TESThello TESThello';
	var d = document.createElement('div');

	d.innerHTML = text;
	findAndReplaceDOMText(d, { find: /(TEST)hello/, wrap: 'x', replace: '$1' });
	htmlEqual(d.innerHTML, 'TEST <x>TEST</x> TESThello TESTHello');

	d.innerHTML = text;
	findAndReplaceDOMText(d, { find: /(TEST)hello/g, wrap: 'x', replace: '$1' });
	htmlEqual(d.innerHTML, 'TEST <x>TEST</x> <x>TEST</x> <x>TEST</x>');

	d.innerHTML = text;
	findAndReplaceDOMText(d, { find: /\s(TEST)(hello)/g, wrap: 'x', replace: '$2' });
	htmlEqual(d.innerHTML, 'TEST<x>hello</x><x>hello</x><x>hello</x>');
});

test('Word boundaries', function() {

	var text = 'a go matching at test wordat at <p>AAA</p><p>BBB</p>';
	var d = document.createElement('div');

	d.innerHTML = text;
	findAndReplaceDOMText(d, { find: /\bat\b/, wrap: 'x' });
	htmlEqual(d.innerHTML, 'a go matching <x>at</x> test wordat at <p>AAA</p><p>BBB</p>');

	d.innerHTML = text;
	findAndReplaceDOMText(d, { find: /\bat\b/g, wrap: 'x' });
	htmlEqual(d.innerHTML, 'a go matching <x>at</x> test wordat <x>at</x> <p>AAA</p><p>BBB</p>');

	d.innerHTML = text;
	findAndReplaceDOMText(d, {
		find: /\bAAA\b/,
		wrap: 'x',
		forceContext: function(el) {
			return el.nodeName.toLowerCase() === 'p';
		}
	});
	htmlEqual(d.innerHTML, 'a go matching at test wordat at <p><x>AAA</x></p><p>BBB</p>')
});

test('Explicit context configuration', function() {

	var d = document.createElement('div');

	// By default all elements have fluid inline boundaries / no forced contexts
	d.innerHTML = '<v>Foo<v>Bar</v></v>';
	findAndReplaceDOMText(d, { find: /FooBar/, wrap: 'x' });
	htmlEqual(d.innerHTML, '<v><x>Foo</x><v><x>Bar</x></v></v>');

	// Explicit true context
	d.innerHTML = '<v>Foo<v>Bar</v></v>';
	findAndReplaceDOMText(d, { find: /FooBar/, wrap: 'x', forceContext: true });
	htmlEqual(d.innerHTML, '<v>Foo<v>Bar</v></v>');

	// Explicit false context
	d.innerHTML = '<v>Foo<v>Bar</v></v>';
	findAndReplaceDOMText(d, { find: /FooBar/, wrap: 'x', forceContext: false });
	htmlEqual(d.innerHTML, '<v><x>Foo</x><v><x>Bar</x></v></v>');

	// <a> is forced context
	// <b> is not
	var forcedAContext = function (el) {
		return el.nodeName.toLowerCase() == 'a';
	};

	d.innerHTML = '<a>Foo<b>BarFoo</b>Bar</a>';
	findAndReplaceDOMText(d, { find: /FooBar/, wrap: 'x', forceContext: forcedAContext });
	htmlEqual(d.innerHTML, '<a><x>Foo</x><b><x>Bar</x>Foo</b>Bar</a>');

	d.innerHTML = '<a>Foo</a><b>Bar</b> <b>Foo</b><a>Bar</a>';
	findAndReplaceDOMText(d, { find: /FooBar/, wrap: 'x', forceContext: forcedAContext });
	htmlEqual(d.innerHTML, '<a>Foo</a><b>Bar</b> <b>Foo</b><a>Bar</a>');

});

test('NON_INLINE_PROSE context fn', function() {

	var d = document.createElement('div');

	d.innerHTML = '<p>Some</p>Thing<em>Some<span>Thing</span></em><div>Some</div>Thing';
	findAndReplaceDOMText(d, {
		find: /something/i, wrap: 'x', forceContext: findAndReplaceDOMText.NON_INLINE_PROSE
	});
	htmlEqual(d.innerHTML, '<p>Some</p>Thing<em><x>Some</x><span><x>Thing</x></span></em><div>Some</div>Thing');

	[
		'<input type="text">',
		'<img>',
		'<script></script>',
		'<style></style>',
		'<svg></svg>'
	].forEach(function(el) {

		d.innerHTML = 'foo' + el + 'bar';
		findAndReplaceDOMText(d, {
			find: /foobar/i, wrap: 'x', forceContext: findAndReplaceDOMText.NON_INLINE_PROSE
		});
		htmlEqual(d.innerHTML, 'foo' + el + 'bar');

	});

	// Ensure regular inline prose elements allow bleeding matches:
	d.innerHTML = '\
		foo<small>ba<i>r</i></small>\
		<em>fooba</em>r\
		foo<strong>ba</strong>r\
		foo<sup>bar</sup>\
		foo<acronym>bar</acronym>\
		<abbr>fo</abbr>ob<u>a<b>r</b></u>\
	';
	findAndReplaceDOMText(d, {
		find: /foobar/gi,
		wrap: 'match',
		forceContext: findAndReplaceDOMText.NON_INLINE_PROSE
	});
	// (16 match portions in total)
	equal(d.innerHTML.match(/<match>/g).length, 16);


});

module('Replacement (With Nodes)');

test('StencilNode definition', function() {
	var d = document.createElement('div');
	d.innerHTML = 'test test';
	findAndReplaceDOMText(d, { find: /test/ig, wrap: 'div' });
	htmlEqual(d.innerHTML, '<div>test</div> <div>test</div>');
	d.innerHTML = 'test test';
	findAndReplaceDOMText(d, {
		find: /test/ig,
		replace: function(portion) {
			var e = document.createElement('x');
			e.className = 'f';
			e.appendChild(document.createTextNode(portion.text));
			return e;
		}
	});
	htmlEqual(d.innerHTML, '<x class="f">test</x> <x class="f">test</x>');
	d.innerHTML = 'test test';
	findAndReplaceDOMText(d, {
		find: /test/ig,
		wrap: document.createElement('z')
	});
	htmlEqual(d.innerHTML, '<z>test</z> <z>test</z>');
});

test('Edge case text nodes', function() {
	var d = document.createElement('div');
	// Empty text nodes
	var t1 = d.appendChild(document.createTextNode(''));
	d.appendChild(document.createTextNode('x'));
	var t2 = d.appendChild(document.createTextNode(''));
	findAndReplaceDOMText(d, { find: /x/, wrap: 'em' });
	htmlEqual(d.innerHTML, '<em>x</em>');
	equal(d.childNodes.length, 3);
	equal(d.childNodes[0], t1);
	equal(d.childNodes[2], t2);
});

test('Custom replacement function', function() {
	var d = document.createElement('div');
	d.innerHTML = 'aaaaa';
	findAndReplaceDOMText(d, {
		find: /a/g,
		replace: function(portion) {
			return document.createTextNode('b' + portion.text);
		}
	});
	htmlEqual(d.innerHTML, 'bababababa');
	d.innerHTML = '1234';
	findAndReplaceDOMText(d, {
		find: /\d/g,
		replace: function(portion, match) {
			var e = document.createElement('u');
			e.innerHTML = portion.text + '_';
			equal(portion.index, 0);
			return e;
		}
	});
	htmlEqual(d.innerHTML, '<u>1_</u><u>2_</u><u>3_</u><u>4_</u>');
});

test('Custom replacement function - correct ordering', function() {
	var d = document.createElement('div');
	var nCalled = 0;
	d.innerHTML = 'test<b>ing</b>123';
	findAndReplaceDOMText(d, {
		find: /testing[0-9]+/g,
		replace: function(portion) {
			switch (nCalled++) {
				case 0: equal(portion.text, 'test'); break;
				case 1: equal(portion.text, 'ing'); break;
				case 2: equal(portion.text, '123'); break;
				default: ok(false, 'Not expecting further matches');
			}
			return document.createTextNode(portion.text);
		}
	});
	equal(nCalled, 3);
});

module('Replacement (with text)');

test('101', function() {
	var d = document.createElement('div');
	d.innerHTML = '111 foo 222 foo';
	findAndReplaceDOMText(d, {
		find: 'foo',
		replace: 'bar'
	});
	htmlEqual(d.innerHTML, '111 bar 222 bar');
});

test('With regex plus capture group', function() {
	var d = document.createElement('div');
	d.innerHTML = '111 222 333';
	findAndReplaceDOMText(d, {
		find: /(\d+)/g,
		replace: 'aaa$1'
	});
	htmlEqual(d.innerHTML, 'AAA111 AAA222 AAA333');
});

module('Complex capture groups');

test('$n', function() {
	var d = document.createElement('div');
	d.innerHTML = '111abc333';
	findAndReplaceDOMText(d, {
		find: /(a)(b)(c)/g,
		replace: '$3$2$1'
	});
	htmlEqual(d.innerHTML, '111cba333');
});

test('$&/$0', function() {
	var d = document.createElement('div');
	d.innerHTML = '111aabbcc333';
	findAndReplaceDOMText(d, {
		find: /[a-z]{2}/g,
		replace: '_$0_$&_'
	});
	htmlEqual(d.innerHTML, '111_aa_aa__bb_bb__cc_cc_333');
});

test('Left (`)', function() {
	var d = document.createElement('div');
	d.innerHTML = 'this is a test';
	findAndReplaceDOMText(d, {
		find: /\ba\b/,
		replace: '[$`]'
	});
	htmlEqual(d.innerHTML, 'this is [this is ] test');
});

test('Right (\')', function() {
	var d = document.createElement('div');
	d.innerHTML = 'this is a test';
	findAndReplaceDOMText(d, {
		find: /\ba\b/,
		replace: "[$']"
	});
	htmlEqual(d.innerHTML, 'this is [ test] test');
});

test('Empty captured groups', function() {
	var d = document.createElement('div');
	d.innerHTML = '111333';
	findAndReplaceDOMText(d, {
		find: /(1+)(\s+)?(3+)/g,
		replace: '$3$2$1'
	});
	// $2 is empty, so should be replaced by nothing (empty string):
	htmlEqual(d.innerHTML, '333111');
});

module('Filtering');

test('Element filtering', function() {

	var html = 'foo <style>foo{}</style> foo <script>foo;</script>';
	var d = document.createElement('div');

	d.innerHTML = html;

	findAndReplaceDOMText(d, {
		find: /foo/g,
		wrap: 'span',
		filterElements: function(el) {
			return !/^(?:script|style)$/i.test(el.nodeName);
		}
	});
	htmlEqual(d.innerHTML, '<span>foo</span> <style>foo{}</style> <span>foo</span> <script>foo;</script>');

	d.innerHTML = html;
	
	findAndReplaceDOMText(d, {
		find: /foo/g,
		wrap: 'span',
		filterElements: function(el) {
			return 'script' !== el.nodeName.toLowerCase();
		}
	});
	// (Only script tag blocked:)
	htmlEqual(d.innerHTML, '<span>foo</span> <style><span>foo</span>{}</style> <span>foo</span> <script>foo;</script>');

});

module('Revert');

test('Basic text', function() {
	var d = document.createElement('div');
	var original = d.innerHTML = 'this is a test';
	findAndReplaceDOMText(d, {
		find: /\ba\b/,
		replace: "something"
	}).revert();
	htmlEqual(d.innerHTML, original);
});

test('Complex text', function() {
	var d = document.createElement('div');
	var original = d.innerHTML = 'This is a Test123';
	findAndReplaceDOMText(d, {
		find: /\w{2}/g,
		replace: "$`"
	}).revert();
	htmlEqual(d.innerHTML, original);
});

test('Across node boundaries', function() {
	var d = document.createElement('div');
	var original = d.innerHTML = 'Testing 123<a>442</a>35432<b>342</b>3dg<e>4</e> Testing';
	findAndReplaceDOMText(d, {
		find: /\d{5}/g,
		wrap: 'span'
	}).revert();
	htmlEqual(d.innerHTML, original);
});

module('Legacy');

test('Deprecated argument signature', function() {

	var text = 'foobar foobar <style>foobar{}</style>';
	var d = document.createElement('div');

	d.innerHTML = text;
	findAndReplaceDOMText(/(foo)bar/g, d, function(fill) {
		var x = document.createElement('x');
		x.appendChild(document.createTextNode(fill));
		return x;
	}, 1, function(el) {
		return el.nodeName.toLowerCase() != 'style';
	});
	htmlEqual(d.innerHTML, '<x>foo</x>bar <x>foo</x>bar <style>foobar{}</style>');

});

module('portionMode');

test('portionMode:first', function() {
	var d = document.createElement('div');
	d.innerHTML = 'Testing 123 HE<em>LLO there</em>';
	findAndReplaceDOMText(d, {
		find: /hello/i,
		wrap: 'span',
		portionMode: 'first'
	});
	htmlEqual(d.innerHTML, 'Testing 123 <span>HELLO</span><em> there</em>');
});

test('portionMode:retain', function() {
	var d = document.createElement('div');
	d.innerHTML = 'Testing 123 HE<em>LLO there</em>';
	findAndReplaceDOMText(d, {
		find: /hello/i,
		wrap: 'span',
		portionMode: 'retain'
	});
	htmlEqual(d.innerHTML, 'Testing 123 <span>HE</span><em><span>LLO</span> there</em>');
});

module('Presets');

test('prose', function() {

	var d = document.createElement('div');

	d.innerHTML = '\
		123\
		<h1>123</h1>\
		<script>\
			123;\
		</script>\
		<p>1</p><p>2</p><p>3</p>\
		<div>\
			1<em>23</em>\
			123\
		</div>\
		<div>\
			<style>123</style>\
		</div>\
	';

	findAndReplaceDOMText(d, {
		find: /123/g,
		replace: '999',
		preset: 'prose'
	});

	htmlEqual(d.innerHTML, '\
		999\
		<h1>999</h1>\
		<script>\
			123;\
		</script>\
		<p>1</p><p>2</p><p>3</p>\
		<div>\
			9<em>99</em>\
			999\
		</div>\
		<div>\
			<style>123</style>\
		</div>\
	');

});

module('indexInMatch');

test('Single portion', function() {
	var d = document.createElement('div');
	d.innerHTML = '___AAAAA';
	//                ^ 0
	findAndReplaceDOMText(d, {
		find: /A+/g,
		replace: function(portion) {
			return portion.indexInMatch;
		}
	});
	htmlEqual(d.innerHTML, '___0');
});

test('Two portions', function() {
	var d = document.createElement('div');
	d.innerHTML = '___AAA<em>AA</em>';
	//                ^ 0    ^ 3
	findAndReplaceDOMText(d, {
		find: /A+/g,
		replace: function(portion) {
			return portion.indexInMatch;
		}
	});
	htmlEqual(d.innerHTML, '___0<em>3</em>');
});

test('>Two portions', function() {
	var d = document.createElement('div');
	d.innerHTML = '___AA<em>A</em>A<u>A</u>';
	//                ^ 0   ^ 2   ^ 3 ^ 4
	findAndReplaceDOMText(d, {
		find: /A+/g,
		replace: function(portion) {
			return portion.indexInMatch;
		}
	});
	htmlEqual(d.innerHTML, '___0<em>2</em>3<u>4</u>');
});
