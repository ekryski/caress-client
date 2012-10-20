var expect = chai.expect;

var socket;
io = {
	connect : function() {
		socket = new EventEmitter();
		return socket;
	}
}
client = new Caress.Client();
client.connect();
socket.emit('connect');

describe("Caress Client", function () {
	it("Fires a normal event", function (done) {
		document.addEventListener('touchstart', function(ev) {
			expect(ev.touches.length).to.equal(1);
			expect(ev.clientX).to.equal(document.documentElement.clientWidth);
			expect(ev.clientY).to.equal(document.documentElement.clientHeight);
			done();
		});

		socket.emit('tuio', {
			bundle : true,
			messages : [
				{ profile : '/tuio/2Dcur', type : 'alive', sessionIds : [Object] },
				{ profile : '/tuio/2Dcur',
					type : 'set',
					sessionId : 3,
					xPosition : 1,
					yPosition : 1,
					xVelocity : 0,
					yVelocity : 0,
					motionAcceleration : 0 },
				{ profile : '/tuio/2Dcur', type : 'fseq', frameID : 162 }
			],
			duplicate : false
		});
	});
});