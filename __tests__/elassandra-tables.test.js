import { cassandraClient } from '../server/models';

import { closeConnection } from './helpers/close';

describe('Test Cassandra Tables', () => {
  const tables = [
    'course',
    'topic',
    'user',
    'member',
    'review',
    'join_request',
    'lesson',
    'comment',
    'exercise',
    'exercise_work',
    'exam',
    'exam_work'
  ];

  tables.forEach((currentTableName) => {
    const query = `SELECT * FROM ${currentTableName}`;
    it(query, async () => {
      const result = await cassandraClient.execute(query);
      expect(result.rows).toBeInstanceOf(Array);
    });
  });
});

afterAll(closeConnection);
