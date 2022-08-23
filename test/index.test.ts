
import assert from 'assert';
import chai from 'chai';
import {
  getNumber,
  getString,
  getObject
} from "../src/index";
const expect = chai.expect;

describe('#getNumber() function', function () {
  it('should return 1 when the value is not present', function () {
    assert.equal(getNumber(), 1);
    expect(getNumber()).to.be.a('number');
  });

  it('should return passed parameter', function () {
    assert.equal(getNumber(2), 2);
    expect(getNumber(null)).to.be.null;
    expect(getNumber(undefined)).not.to.be.undefined;
    expect(getNumber(2)).to.be.a('number');
  });
});

describe('#getString() function', function () {
  it('should return Default value when the value is not present', function () {
    expect(getString()).to.be.a('string');
  });

  it('should return passed parameter', function () {
    assert.equal(getString("world"), "world");
    expect(getString(null)).to.be.null;
    expect(getString(undefined)).not.to.be.undefined;
    expect(getString()).to.be.a('string');
  });
});

describe('#getObject() function', function () {
  it('should return Default value when the value is not present', function () {
    expect(getObject()).to.be.a('object');
  });

  it('should return passed parameter', function () {
    assert.deepEqual(getObject({ a: 1 }), { a: 1 });
    expect(getObject({ a: 1 })).to.have.property('a');
    expect(getObject({a: 1, b: 2})).to.not.have.any.keys('c', 'd');
    expect(getObject({a: 1, b: 2})).to.have.any.keys('b', 'c');
    expect(getObject({a: 1, b: 2})).to.have.all.keys('a', 'b');
    expect(getObject(null)).to.be.null;
    expect(getObject(undefined)).not.to.be.undefined;
    expect(getObject()).to.be.a('object');
  });
});
