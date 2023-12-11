

export default function AboutMe({translation}) {
  return (
    <div className="aboutMe">
        <h1>{translation?.Title}</h1>
        <p>{translation?.Description}</p>

        <div className="horizontalLine"></div>
    </div>
  )
}
