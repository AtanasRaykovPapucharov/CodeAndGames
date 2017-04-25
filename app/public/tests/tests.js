'use strict';

mocha.setup('bdd');

const { expect, assert } = chai;

const requester = ajaxRequester;
const userDataObj = userData;

const result = {
	result: ['a', 'b', 'c', 42, new Array()]
};
const AUTH_KEY = "SOME_AUTH_KEY";
const user = {
	username: 'SOME_USERNAME',
	passHash: 'SOME_PASSHASH'
};

//========================================================================================================//

describe('Games&Code App - Data Tests', function () {
	describe('Blog data tests', function () {
		describe('GET blogs tests', function () {
			beforeEach(function () {
				sinon.stub(requester, 'get')
					.returns(new Promise((resolve, reject) => {
						resolve(result);
					}));
			});
			afterEach(function () {
				requester.get.restore();
			});

			it('expect blogData(requester).getBlogs() to make exactly one get call', function (done) {
				blogData(requester).getBlogs()
					.then(() => {
						expect(requester.get.calledOnce).to.be.true;
					})
					.then(done, done);
			});
			it('expect blogData(requester).getBlogs() to make correct get call', function (done) {
				blogData(requester).getBlogs()
					.then(obj => {
						const actual = requester.get
							.firstCall
							.args[0];

						expect(actual).to.equal('/api/blog');
					})
					.then(done, done);
			});
			it('expect blogData(requester).getBlogs() to return correct result', function (done) {
				blogData(requester).getBlogs()
					.then(obj => {
						expect(obj).to.eql(result)
					})
					.then(done, done);
			});
		});
	});

	describe('User data tests', function () {
		describe('PUT user tests - registering', function () {
			beforeEach(function () {
				sinon.stub(requester, 'put')
					.returns(new Promise((resolve, reject) => {
						resolve(user);
					}));
			});
			afterEach(function () {
				requester.put.restore();
			});

			it('expect userData(requester).newUser(user) to make exactly one put call', function (done) {
				userData(requester).newUser(user)
					.then(() => {
						expect(requester.put.calledOnce).to.be.true;
					})
					.then(done, done);
			});
			it('expect userData(requester).newUser(user) to make correct put call', function (done) {
				userData(requester).newUser(user)
					.then(() => {
						const actual = requester.put
							.firstCall
							.args[0];
						expect(actual).to.equal('/api/users');
					})
					.then(done, done);
			});
			it('expect userData(requester).newUser(user) to put correct user data', function (done) {
				userData(requester).newUser(user)
					.then(() => {
						const actual = requester.put
							.firstCall
							.args[1];
						const prop = Object.keys(actual).sort();
						expect(prop.length).to.equal(2);
						expect(prop[0]).to.equal('passHash');
						expect(prop[1]).to.equal('username');
					})
					.then(done, done);
			});
			it('expect registering of user to return the user', function (done) {
				userData(requester).newUser(user)
					.then(actual => {
						expect(actual).to.eql(user);
					})
					.then(done, done);
			});
		});

		describe('POST user tests - logging', function () {
			beforeEach(function () {
				sinon.stub(requester, 'post')
					.returns(new Promise((resolve, reject) => {
						resolve(user);
					}));
			});
			afterEach(function () {
				requester.post.restore();
			});

			it('expect userData(requester).loginUser(user) to make exactly one post call', function (done) {
				userData(requester).loginUser(user)
					.then(() => {
						expect(requester.post.calledOnce).to.be.true;
					})
					.then(done, done);
			});
			it('expect userData(requester).loginUser(user) to make correct post call', function (done) {
				userData(requester).loginUser(user)
					.then(() => {
						const actual = requester.post
							.firstCall
							.args[0];
						expect(actual).to.equal('/api/users');
					})
					.then(done, done);
			});
			it('expect userData(requester).loginUser(user) to post correct user data', function (done) {
				userData(requester).loginUser(user)
					.then(() => {
						const actual = requester.post
							.firstCall
							.args[1];
						const prop = Object.keys(actual).sort();
						expect(prop.length).to.equal(2);
						expect(prop[0]).to.equal('passHash');
						expect(prop[1]).to.equal('username');
					})
					.then(done, done);
			});
			it('expect logging of user to return the user', function (done) {
				userData(requester).loginUser(user)
					.then(actual => {
						expect(actual).to.eql(user);
					})
					.then(done, done);
			});
		});
	});
});

//========================================================================================================//

describe('Games&Code App - Controllers Tests', function () {
	describe('1 is equal 1', function () {
		it('1 = 1', function () {
			expect(1).to.equal(1);
		})
	});
});

//========================================================================================================//

describe('Games&Code App - View Tests', function () {
	describe('1 is equal 1', function () {
		it('1 = 1', function () {
			expect(1).to.equal(1);
		})
	});
});

//========================================================================================================//

describe('Games&Code App - Utils Tests', function () {
	describe('1 is equal 1', function () {
		it('1 = 1', function () {
			expect(1).to.equal(1);
		})
	});
});

mocha.run();