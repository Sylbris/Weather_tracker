import posts from './posts';
import file from './file';
import readings from './readings';
import extReadings from './extReadings';
import nationalReadings from './nationalReadings';
import lastReadings from './lastReadings';
import extLastReadings from './extLastReadings';
import authReducer from './auth';
import meteoblue from './meteoblue';
import weatherIsr from './weatherIsr';
import { combineReducers } from 'redux'

export default combineReducers({
    posts, file, readings, extReadings, nationalReadings, lastReadings, extLastReadings, authReducer, meteoblue, weatherIsr
});

