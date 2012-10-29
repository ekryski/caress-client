var expect = chai.expect;

var socket;
io = {
	connect : function () {
		socket = new EventEmitter();
		return socket;
	}
}
client = new Caress.Client();
client.connect();
socket.emit('connect');

describe("Caress Client", function () {
	it("Fires a normal event", function (done) {
		var listener = function (ev) {
			expect(ev.touches.length).to.equal(1);
			expect(ev.clientX).to.equal(document.documentElement.clientWidth);
			expect(ev.clientY).to.equal(document.documentElement.clientHeight);
			done();
		};
		document.addEventListener('touchstart', listener);

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

		document.removeEventListener('touchstart', listener);
	});

	it("Doesn't do duplicates", function () {
		socket.emit('tuio', { bundle : true,
			messages : [
				{ profile : '/tuio/2Dcur', type : 'alive' },
				{ profile : '/tuio/2Dcur', type : 'fseq', frameID : -1 }
			],
			duplicate : true
		});

		socket.emit('tuio', { bundle : true,
			messages : [
				{ profile : '/tuio/2Dcur', type : 'alive' },
				{ profile : '/tuio/2Dcur', type : 'fseq', frameID : 184 }
			],
			duplicate : false
		});
	});

	it("Handles namespacing without source", function(done) {
		var listener = function(ev) {
			expect(client.touches).to.have.property('localhost');
			done();
		};

		document.addEventListener('touchstart', listener);

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

		document.removeEventListener('touchstart', listener);
	});

	it("Handles namespacing with source", function(done) {
		var listener = function(ev) {
			expect(client.touches).to.have.property('TuioPad@192.168.1.67');
			done();
		};

		document.addEventListener('touchstart', listener);

		socket.emit('tuio', {
			bundle : true,
			messages : [
				{ profile: '/tuio/2Dcur', type: 'source', address: 'TuioPad@192.168.1.67' },
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

		document.removeEventListener('touchstart', listener);
	});
});