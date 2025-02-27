import { useState } from "react"

const App = () => {
  let heroData = [
    {text1:"dive into",text2:"what you love"},
    {text1:"indulge",text2:"your passions"},
    {text1:"give in to",text2:"your passions"},
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus]= useState(false)
  return (
    <div>
      <background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

export default App
