import constants from 'core/types'
import Web3      from 'web3'


export function setProvider() {
  return (dispatch) => {
    // see if there is an object attached to browsers window object
    if (window.ethereum) {
      const { ethereum } = window
      const web3Provider = new Web3(ethereum)

      // enable() returns a promise that opens pops up window to users asking
      // for access, after user clicks yes, they approve as an array, and you
      // you pluck off first account, now critical step is you have to set the
      // web3 default account with the account address that you get from metamask...
      // web3Provider.eth.defaultAccount = defaultAccount
      ethereum.enable().then((account) => {
        const defaultAccount = account[0]
        web3Provider.eth.defaultAccount = defaultAccount

        // after above user gave access to account number, then below code
        // sets provider and sets web3.js
        dispatch((() => {
          return {
            type: constants.SET_PROVIDER, web3Provider
          }
        })())
      })
    }
  }
}
