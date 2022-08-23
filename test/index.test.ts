
import assert from 'assert';
import chai from 'chai';
import { getNumber , getString } from "../src/index";
const expect = chai.expect;

describe('#getNumber() function', function () {
  it('should return 1 when the value is not present', function () {
    assert.equal(getNumber(), 1);
    expect(getNumber()).to.be.a('number');
  });

  it('should return passed parameter', function () {
    assert.equal(getNumber(2), 2);
    expect(getNumber()).to.be.a('number');
  });
});

describe('#getString() function', function () {
  it('should return Default value when the value is not present', function () {
    expect(getString()).to.be.a('string');
  });

  it('should return passed parameter', function () {
    assert.equal(getString("world"), "world");
    expect(getString()).to.be.a('string');
  });
});
