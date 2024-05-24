import { Pipe, PipeTransform } from '@angular/core';

type GroupMap<T> = {[key: string]: T[]};

export function groupBy<T>(value: T[] | null, field: string): T[][] {
  if (!value || !(value instanceof Array))
    return [];

  // Group into an object. Could use a normal loop here, but that wouldn't be as fun as reduce, now would it?
  const groupMap: GroupMap<T> = value.reduce((acc, item) => {
    const key = (item as any)[field];
    if (!acc[key])
      acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as GroupMap<T>);

  return Object.values(groupMap);
}

@Pipe({
  name: 'groupBy',
  standalone: true,
})
export class GroupByPipe implements PipeTransform {

  transform<T>(value: T[] | null, field: string): T[][] {
    return groupBy(value, field);
  }

}
