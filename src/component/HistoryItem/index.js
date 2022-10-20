import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="list-container">
        <p>{timeAccessed}</p>
        <img className="icon" src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p className="domain-url" alt="domain logo">
          {domainUrl}
        </p>
        <button className="button" type="button" onClick={onDelete}>
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
