


export default function Experience({translation}) {
  const desc1 = translation?.Description1.split("-");
  const desc2 = translation?.Description2.split("-");
  return (
    <div className="experience">
      <h1>{translation?.Title}</h1>
      <h3>{translation?.Subtitle1}</h3>
      {desc1?.map((ex)=><p key={ex}>&#183;{ex}</p>)}
      <br />
      <h3>{translation?.Subtitle2}</h3>
      {desc2?.map((ex)=><p key={ex}>&#183;{ex}</p>)}
      <div className="horizontalLine"></div>
    </div>
  )
}
