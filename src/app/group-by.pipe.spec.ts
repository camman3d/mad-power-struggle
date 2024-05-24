import { GroupByPipe, groupBy } from './group-by.pipe';

describe('GroupByPipe', () => {
  it('create an instance', () => {
    const pipe = new GroupByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should group an array of objects by a property', () => {
    const items = [
      {name: 'one', group: 'a'},
      {name: 'two', group: 'b'},
      {name: 'three', group: 'a'},
      {name: 'four', group: 'b'},
      {name: 'five', group: 'a'},
    ];
    const grouped = groupBy(items, 'group');
    expect(grouped).toEqual([
      [
        {name: 'one', group: 'a'},
        {name: 'three', group: 'a'},
        {name: 'five', group: 'a'},
      ],
      [
        {name: 'two', group: 'b'},
        {name: 'four', group: 'b'},
      ]
    ])
  });
});
