import './index.css'

import {format} from 'date-fns'

const Items = props => {
  const {Item, onStarClick} = props

  const {id, head, Date1, isStar} = Item

  const imgUrl = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const dateValue = format(new Date(Date1), 'dd MMMM yyyy, EEEE')

  const onClickButton = () => {
    onStarClick(id)
  }

  return (
    <li className="list1">
      <div>
        <p className="head">{head}</p>
        <p>Date: {dateValue}</p>
      </div>
      <button
        type="button"
        onClick={onClickButton}
        data-testid="star"
        className="img"
      >
        <img src={imgUrl} alt="Star" />
      </button>
    </li>
  )
}

export default Items
