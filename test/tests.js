var Aggregate = require('../index');

QUnit.test( 'Calculate sums over two 48-hour periods', function(assert) {
  var sums = Aggregate.sum(endDate, numPeriods, periodDurationInMs, series);

  assert.deepEqual(sums, [
    {
      period: p1,
      sum: 11
    },
    {
      period: p2,
      sum: 15
    }
  ], 'Passed!');
});

QUnit.test( 'Calculate averages over two 48-hour periods', function(assert) {
  var averages = Aggregate.average(endDate, numPeriods, periodDurationInMs, series);

  assert.deepEqual(averages, [
    {
      period: p1,
      average: 5.5
    },
    {
      period: p2,
      average: 7.5
    }
  ], 'Passed!');
});

QUnit.test( 'Calculate sum over an empty set', function(assert) {
  var sums = Aggregate.sum(endDate, numPeriods, periodDurationInMs, []);

  assert.deepEqual(sums, [], 'Passed!');
});

var endDate = new Date("June 9, 2016 GMT-0000"),
    numPeriods = 2,
    periodDurationInMs = Aggregate.DAY_IN_MS * 2,
    p1 = new Date("June 5, 2016 GMT-0000"),
    p2 = new Date("June 7, 2016 GMT-0000"),
    series = [
      {
        timestamp: new Date("June 1, 2016 GMT-0000"),
        value: 1
      },
      {
        timestamp: new Date("June 2, 2016 GMT-0000"),
        value: 2
      },
      {
        timestamp: new Date("June 3, 2016 GMT-0000"),
        value: 3
      },
      {
        timestamp: new Date("June 4, 2016 GMT-0000"),
        value: 4
      },
      {
        timestamp: new Date("June 5, 2016 GMT-0000"),
        value: 5
      },
      {
        timestamp: new Date("June 6, 2016 GMT-0000"),
        value: 6
      },
      {
        timestamp: new Date("June 7, 2016 GMT-0000"),
        value: 7
      },
      {
        timestamp: new Date("June 8, 2016 GMT-0000"),
        value: 8
      },
      {
        timestamp: new Date("June 9, 2016 GMT-0000"),
        value: 9
      },
      {
        timestamp: new Date("June 10, 2016 GMT-0000"),
        value: 10
      },
      {
        timestamp: new Date("June 11, 2016 GMT-0000"),
        value: 11
      },
      {
        timestamp: new Date("June 12, 2016 GMT-0000"),
        value: 12
      },
    ];
