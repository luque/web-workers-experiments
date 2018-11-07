var ports = [];
var n = 0;

onconnect = function(e) {
    ports.push(e.ports[0]);
}

function broadcastMessage(msg) {
    ports.forEach(function(port) {
	port.postMessage(msg)
    });
}

function crunch() {
    if (ports.length > 0) {
	n += 1;
	for (var i = 2; i <= Math.sqrt(n); i += 1) {
	    if (n % i == 0) {
		setTimeout(crunch, 100);
		return;
	    }
	}
	// found a prime!
	broadcastMessage(n);
    }
    setTimeout(crunch, 100);
}

crunch();


