import assert from 'assert';
import chai from 'chai';
import sinon from 'sinon';
import 
  * as service
 from "../src/index";
const expect = chai.expect;

describe('#getNumber() function', function () {
  it('should return 1 when the value is not present', function () {
    assert.equal(service.getNumber(), 1);
    expect(service.getNumber()).to.be.a('number');
  });

  it('should return passed parameter', function () {
    assert.equal(service.getNumber(2), 2);
    expect(service.getNumber(NaN)).to.be.NaN;
    expect(service.getNumber(Infinity)).to.equal(Infinity);
    expect(service.getNumber(-Infinity)).to.equal(-Infinity);
    expect(service.getNumber(null)).to.be.null;
    expect(service.getNumber(undefined)).not.to.be.undefined;
    expect(service.getNumber(2)).to.be.a('number');
    expect(service.getNumber(2)).to.be.finite;
  });
});

describe('#getString() function', function () {
  it('should return Default value when the value is not present', function () {
    expect(service.getString()).to.be.a('string');
  });

  it('should return passed parameter', function () {
    assert.equal(service.getString("world"), "world");
    expect(service.getString(null)).to.be.null;
    expect(service.getString(undefined)).not.to.be.undefined;
    expect(service.getString()).to.be.a('string');
  });
});

describe('#getObject() function', function () {
  it('should return Default value when the value is not present', function () {
    expect(service.getObject()).to.be.a('object');
  });

  it('should return passed parameter', function () {
    assert.deepEqual(service.getObject({ a: 1 }), { a: 1 });
    expect(service.getObject({ a: 1 })).to.have.property('a');
    expect(service.getObject({a: 1, b: 2})).to.not.have.any.keys('c', 'd');
    expect(service.getObject({a: 1, b: 2})).to.have.any.keys('b', 'c');
    expect(service.getObject({a: 1, b: 2})).to.have.all.keys('a', 'b');
    expect(service.getObject(null)).to.be.null;
    expect(service.getNumber(NaN)).to.be.NaN;
    expect(service.getObject(undefined)).not.to.be.undefined;
    expect(service.getObject({})).to.be.a('object');
    expect(service.getObject({})).to.be.empty;
    expect(service.getObject({a: 1, b: 2})).not.to.be.empty;
    expect(Object.keys(service.getObject({a: 1, b: 2}))).to.have.lengthOf(2);
  });
});

describe('#getSum() function', function () {
  it('should return sum', function () {
    expect(service.getSum(2, 2)).to.be.a('number');
    expect(service.getSum(2, 2)).to.be.equal(4)
  });
});

describe('#outFunction() function', function () {
  it('should return sum called from inner function', function () {
    const num1 = 4, num2 = 5;
    const sumStub = sinon.stub(service,"getSum").returns(9);
    const result = service.outFunction(num1, num2);
    expect(result).to.be.equal(9);
    sinon.assert.calledOnce(sumStub);
    sumStub.restore();
    expect(sumStub).to.be.a('function');
  });
});
