function $i() {
	var a = arguments, 
	d = document,
	s, //script placeholder
	i = 0, // count
	e, //element
	r, //readyState
	h = d.getElementsByTagName('head')[0]; //head
	function l() {
		if (e = a[i])
			if (e.big){
				r = this.readyState;
				s = d.createElement("script");
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