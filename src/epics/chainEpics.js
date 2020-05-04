import R from 'ramda';
import {of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';

const chainEpics = R.curry((fromType, toType, action$) =>
  action$.pipe(
    ofType(fromType),
    mergeMap(() => of({type: toType})),
  ),
);

export const chainEpicsWithAction = R.curry((fromType, toType, action$) =>
  action$.pipe(
    ofType(fromType),
    mergeMap((action) => of({...action, type: toType})),
  ),
);

export default chainEpics;
