import {combineEpics} from 'redux-observable';
import QRScanEpic from './QRScanEpic';

const epics = [QRScanEpic];

const rootEpic = (...args) => combineEpics(...epics)(...args);

export default rootEpic;
