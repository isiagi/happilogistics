import "./begin.css"

const Begin = ({head, para}) => {
  return (
    <div className="begin__container">
        <h1>{head}</h1>
        <p>{para}</p>
    </div>
  )
}

export default Begin