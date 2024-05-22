import Counter from "./components/Counter/Counter"


function App() {

  return (
  <div>
    <Counter initialValue ={10} add={1} rest={1}/>
    <Counter initialValue ={4} add={2} rest ={2}/>
    <Counter initialValue ={0} add={3} rest={3}/>
  </div>
  )
}

export default App
