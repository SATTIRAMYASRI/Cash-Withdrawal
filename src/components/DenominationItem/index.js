// Write your code here
import './index.css'

const DenominationItem = props => {
  const {buttonDetails, onWithdrawBalance} = props
  const {id, value} = buttonDetails
  const btnClicked = () => {
    onWithdrawBalance(value)
  }
  return (
    // <p className="button-value">{value}</p>
    <li className="li-container">
      <button type="button" className="button-container" onClick={btnClicked}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
