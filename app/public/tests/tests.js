mocha.setup('bdd');

const {
	expect,
	assert
} = chai;

const AUTH_KEY = "SOME_AUTH_KEY";
const user = {
	username: 'SOME_USERNAME',
	passHash: 'SOME_PASSHASH'
};

describe('App - Tests', function () {
	describe('1 is equal 1', function () {
		it('1 = 1', function () {
			expect(1).to.equal(1);
		})
	});
});

mocha.run();
