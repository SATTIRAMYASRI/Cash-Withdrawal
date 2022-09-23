// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {value: 2000}

  onWithdrawBalance = valueToBeDrawn => {
    this.setState(prevState => ({
      value: prevState.value - valueToBeDrawn,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {value} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="letter-container">
              <p className="letter-styling">S</p>
            </div>
            <h1 className="user-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance-text">Your Balance</p>
            <div>
              <p className="balance-amount">{value}</p>
              <p className="in-rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="balance-amount">Withdraw</p>
          <p className="your-balance-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachButton => (
              <DenominationItem
                key={eachButton.value}
                buttonDetails={eachButton}
                onWithdrawBalance={this.onWithdrawBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
