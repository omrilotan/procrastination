const chai = require('chai');
const sinon = require('sinon');
chai.use(require('sinon-chai'));
const { wrap } = require('.');

const { expect } = chai;

describe('procrastination', () => {
	it('should call on callback', () => {
		const fake = sinon.fake();

		const callFake = wrap(function callFake() {
			fake();
		});

		callFake();
		callFake();

		expect(fake.callCount).to.equal(1);
	});
});
