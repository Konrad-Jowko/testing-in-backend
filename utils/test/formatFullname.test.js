const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullName', () => {

it('should return good formatted response if proper args', () => {
  expect(formatFullname('john doe')).to.equal('John Doe');
  expect(formatFullname('jOhN DoE')).to.equal('John Doe');
  expect(formatFullname('Amanda DOE')).to.equal('Amanda Doe');
  expect(formatFullname('AmANDa dOe')).to.equal('Amanda Doe');
});

it('should return an error if "fullName" arg is not a string', () => {
  expect(formatFullname(undefined)).to.equal('Error');
  expect(formatFullname(12)).to.equal('Error');
  expect(formatFullname({})).to.equal('Error');
  expect(formatFullname([])).to.equal('Error');
  expect(formatFullname(function() {})).to.equal('Error');
});

it('should return an error if "fullName" arg is empty', () => {
  expect(formatFullname()).to.equal('Error');
});

it('should return an error if "fullName" arg is not two strings connected with a space', () => {
  expect(formatFullname('john')).to.equal('Error');
  expect(formatFullname('john doe junior')).to.equal('Error');
  expect(formatFullname('john-doe-junior')).to.equal('Error');
});
});
