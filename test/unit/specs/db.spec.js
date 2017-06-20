import DB from '@/store/api/db';

describe('API', function () {
  describe('db API', function () {
    this.timeout(100000);

    it('база данных создается', function () {
      const db = new DB('test-1');
      expect(db)
        .to.not.equal(null);
    });

    it('функция загрузки слов не возвращает ошибку', function (done) {
      const db = new DB('test-2');

      db.getWords((err, words) => {
        expect(err).to.equal(null);
        done();
      });
    });

    it('функция загрузки слов возвращает правильное количетсво слов', function (done) {
      const db = new DB('test-3');

      db.getWords((err, words) => {
        expect(words.length).to.equal(8000);
        done();
      });
    });
  });
});
