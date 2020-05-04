import {
  apiActionTypes,
  requestActionTypes,
  changedActionTypes,
  toggledActionTypes,
  navigateActionTypes
} from 'config/typeConfig';

const actionTypes = {
  qrMessage: changedActionTypes('qr message'),
};

export default actionTypes;
