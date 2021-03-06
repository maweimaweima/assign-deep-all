const { expect } = require('chai');
const { assignShallowConcat } = require('../src/index')
import {
  getFirstTargetData,
  getFirstSourceData,
  getFirstSourceData2
} from './getFirstTestData';

describe('test assignShallowConcat', () => {
  describe('test one source', () => {
    var target = getFirstTargetData(),
      source = getFirstSourceData();

    assignShallowConcat(target, source);
    source.list.push({id: 4});
    source.a.b.c.push({id: 4});
    source.a.b.d.init = 'test';
    source.a.b.e = 'test';
    source.a.b.f = 'test';
    source.a.b.g = 'test';
    source.a.b.h = 'test';
    source.a.b.i = 'test';
    source.a.b.k = 'test';

    it('target.list.length', () => {
      expect(target.list.length).to.be.equal(4);
    });

    it('target.a.b.c.length', () => {
      expect(target.a.b.c.length).to.be.equal(3);
    });

    it('target.a.b.d.init', () => {
      expect(target.a.b.d.init).to.be.equal('test');
    });

    it('target.a.b.e', () => {
      expect(target.a.b.e).to.be.equal('test');
    });

    it('target.a.b.f', () => {
      expect(target.a.b.f).to.be.equal('test');
    });

    it('target.a.b.g', () => {
      expect(target.a.b.g).to.be.equal('test');
    });

    it('target.a.b.f', () => {
      expect(target.a.b.h).to.be.equal('test');
    });

    it('target.a.b.i', () => {
      expect(target.a.b.i).to.be.equal('test');
    });

    it('target.a.b.k', () => {
      expect(target.a.b.k).to.be.equal('test');
    });

    it('target.w.b.c', () => {
      expect(target.w.b.c.length).to.be.equal(2);
    });

    it('target.w.b.k', () => {
      expect(target.w.b.k).to.be.equal('hello world!!');
    });
  });

  describe('test two source', () => {
    var target = getFirstTargetData(),
      source = getFirstSourceData(),
      source2 = getFirstSourceData2();
    assignShallowConcat(target, source, source2);
    source2.list.push({id: 4});
    source2.a.b.c.push({id: 4});
    source2.a.b.d.init = 'test';
    source2.a.b.e = 'test';
    source2.a.b.f = 'test';
    source2.a.b.g = 'test';
    source2.a.b.h = 'test';
    source2.a.b.i = 'test';
    source2.a.b.k = 'test';

    it('target.list.length', () => {
      expect(target.list.length).to.be.equal(2);
    });

    it('target.a.b.c.length', () => {
      expect(target.a.b.c.length).to.be.equal(4);
    });

    it('target.a.b.d.init', () => {
      expect(target.a.b.d.init).to.be.equal('test');
    });

    it('target.a.b.e', () => {
      expect(target.a.b.e).to.be.equal('test');
    });

    it('target.a.b.f', () => {
      expect(target.a.b.f).to.be.equal('test');
    });

    it('target.a.b.g', () => {
      expect(target.a.b.g).to.be.equal('test');
    });

    it('target.a.b.f', () => {
      expect(target.a.b.h).to.be.equal('test');
    });

    it('target.a.b.i', () => {
      expect(target.a.b.i).to.be.equal('test');
    });

    it('target.a.b.k', () => {
      expect(target.a.b.k).to.be.equal('test');
    });

    it('target.w.b.c', () => {
      expect(target.w.b.c.length).to.be.equal(2);
    });

    it('target.w.b.k', () => {
      expect(target.w.b.k).to.be.equal('hello world!!');
    });
  })
});