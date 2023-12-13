

export default function Education({translation}) {
  return (
    <div className="education">
      <h1>{translation?.Title}</h1><br />
      <h3>{translation?.Institution1}</h3>
      <p>{translation?.Description1}</p>
      <h3>2022 - 2023</h3><br />
      <h3>{translation?.Institution2}</h3>
      <p>{translation?.Description2}</p>
      <h3>2018- 2019</h3><br />
      <h3>{translation?.Institution3}</h3>
      <p>{translation?.Description3}</p>
      <h3>2013 - 2016</h3>
    </div>
  )
}
