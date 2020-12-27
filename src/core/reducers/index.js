import { combineReducers } from 'redux'
import { providerReducer } from 'core/reducers/reducer-provider'
import uiReducer           from 'core/reducers/reducer-ui'
import { nameReducer }     from 'core/reducers/reducer-name'

// added and imported providerReducer
const rootReducer = combineReducers({
  ui: uiReducer,
  provider: providerReducer,
  name: nameReducer
  
})

export default rootReducer
