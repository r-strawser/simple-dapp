import { combineReducers } from 'redux'
import { providerReducer } from 'core/reducers/reducer-provider'
import uiReducer           from 'core/reducers/reducer-ui'

// added and imported providerReducer
const rootReducer = combineReducers({
  provider: providerReducer,
  ui: uiReducer
})

export default rootReducer
