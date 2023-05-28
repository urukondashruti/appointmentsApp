import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import Items from '../AppointmentItem'

class Appointments extends Component {
  state = {
    List: [],
    title: '',
    date: '',
  }

  onClickSubmit = event => {
    event.preventDefault()

    const {title, date} = this.state

    const newObject = {
      id: v4(),
      head: title,
      Date1: date,
      isStar: false,
    }

    this.setState(prevState => ({
      List: [...prevState.List, newObject],
      title: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onStarClick = id => {
    const {List} = this.state

    const value1 = List.map(each => {
      if (id === each.id) {
        return {...each, isStar: !each.isStar}
      }

      return each
    })

    this.setState({List: value1})
  }

  onClickBut = () => {
    const {List} = this.state

    const value2 = List.filter(each => each.isStar === true)

    this.setState({List: value2})
  }

  render() {
    const {List, title, date} = this.state

    return (
      <div className="back">
        <div className="con">
          <div className="div">
            <form className="form" onSubmit={this.onClickSubmit}>
              <h1>Add Appointment</h1>
              <label htmlFor="input1" className="title">
                TITLE
              </label>
              <input
                type="text"
                className="input1"
                id="input1"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="input2" className="date">
                DATE
              </label>
              <input
                type="date"
                className="input1"
                id="input2"
                value={date}
                onChange={this.onChangeDate}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="div1">
            <h1>Appointments</h1>
            <button type="button" onClick={this.onClickBut} className="button1">
              Starred
            </button>
          </div>
          <ul className="list2">
            {List.map(each => (
              <Items key={each.id} onStarClick={this.onStarClick} Item={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
