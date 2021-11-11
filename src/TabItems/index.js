import './index.css'

const TabItems = props => {
  const {tabData, onSetTabItem, tabCategory} = props
  const {tabId, displayText} = tabData
  const tabColors = tabId === tabCategory ? 'tab-color' : ''
  const onTabItem = () => {
    onSetTabItem(tabId)
  }

  return (
    <li className="tab-li-container">
      <button
        onClick={onTabItem}
        type="button"
        className={`tab-button ${tabColors}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
