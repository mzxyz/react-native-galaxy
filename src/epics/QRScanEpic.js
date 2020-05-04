import {Empty} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import actionTypes from 'src/actionTypes';

const QRScanEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.qrMessage.changed),
    switchMap((action) => {
      // const { message } = action.payload;
      return Empty;
    }),
  );

export default QRScanEpic;
