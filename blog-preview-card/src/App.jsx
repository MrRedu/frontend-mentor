import { Card } from "./components/Card"

const tags = ['Learning']

function App() {
  return (
    <>
      <h1>Hehe, We don't need a H1</h1>
      <Card srcImage={'/illustration-article.svg'} altImage={'Ilistration'} tags={tags} title='HTML & CSS foundations' paragraph='These languages are the backbone of every website, defining structure, content, and presentation.' />
    </>
  )
}

export default App
