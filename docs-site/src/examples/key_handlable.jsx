import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default React.createClass({
  displayName: 'KeyHandlable',

  getInitialState () {
    return {
      startDate: moment()
    }
  },

  handleChange (date) {
    this.setState({
      startDate: date
    })
  },

  render () {
    return (<div className="row">
      <pre className="column example__code">
        <code className="jsx">
          {"<DatePicker"}<br />
              {"isKeyHandlable={'true'}"}<br />
              {"selected={this.state.startDate}"}<br />
              {"onChange={this.handleChange} />"}
        </code>
      </pre>
      <div className="column">
        <DatePicker
            isKeyHandlable
            selected={this.state.startDate}
            onChange={this.handleChange} />
      </div>
    </div>)
  }
})
