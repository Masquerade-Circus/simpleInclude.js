$i = function () {
	var a = arguments, 
	s, //script placeholder
	d = document,
	i = 0, // count
	e, //element
	r, //readyState
	h = d.documentElement.childNodes[0], //head
	b = 'createElement';
	function l() {
		if (e = a[i])
			if (e.big){
				r = this.readyState;
				if (/.css/.test(e))
					s = d[b]("link"), 
					s.href = e,
					s.type = "text/css",
					s.rel = "stylesheet";
				else	
					s = d[b]("script"),
					s.src = e;
				s.onload = s.onerror = s.onreadystatechange = l;
				h.appendChild(s);
				i++;
			} else
				if (!r || /ded|te/.test(r))
					e();
	}
	l();
};
