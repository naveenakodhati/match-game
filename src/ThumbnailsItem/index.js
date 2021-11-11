import './index.css'

const ThumbnailsItem = props => {
  const {thumbnailsData, onImageClicked} = props
  const {id, thumbnailUrl} = thumbnailsData
  const onImage = () => {
    onImageClicked(id)
  }

  return (
    <li className="image-li-container">
      <button onClick={onImage} className="thumbnail-btn" type="button">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnails" />
      </button>
    </li>
  )
}

export default ThumbnailsItem
