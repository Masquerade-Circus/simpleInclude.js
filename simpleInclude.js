function $i() {
	var a = arguments, 
	d = document,
	s, //script placeholder
	i = 0, // count
	e; //element
	function l() {
		if (e = a[i])
			!e.big ?
				e() :
				s = d.createElement("script"),
				s.src = e,
				s.onload = s.onerror = l,
				d.head.appendChild(s),
				i++;
	}
	l();
};