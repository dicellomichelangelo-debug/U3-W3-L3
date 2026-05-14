import { combineReducers } from 'redux'
import favouriteReducer from './favourite'
import jobsReducer from './jobs'

const mainReducer = combineReducers({
  favourite: favouriteReducer,
  jobs: jobsReducer,
})

export default mainReducer