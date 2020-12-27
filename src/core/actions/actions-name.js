
// stub for action creator
// put logic in to connect to smart contract function here
import constants   from 'core/types'
import contract    from 'truffle-contract'
import SimpleDapp from 'contracts/SimpleDapp.json'

export function checkIfNameExists(name) {
  return (dispatch, getState) => {
    const { web3Provider } = getState().provider
    const SimpleDappContract = contract(SimpleDapp)

    SimpleDappContract.setProvider(web3Provider.currentProvider)
    SimpleDappContract.defaults({ from: web3Provider.eth.defaultAccount })

    return new Promise((resolve, reject) => {
      SimpleDappContract.deployed().then((ad) => {
        return ad.checkIfExists(name)
      }).then((result) => {
        resolve(result)
      })
    })
    .then((result) => {
      dispatch((() => {
        return {
          type: constants.CHECK_IF_NAME_EXISTS,
          result
        }
      })())
    })
    .catch((error) =>{
      console.log('error: ', error)
    })

  }
}