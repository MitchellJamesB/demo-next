import Navbar from './compenents/Navbar'
import Header from './compenents/Header'
import Content from './compenents/Content'
import Footer from './compenents/Footer'
import Main from './compenents/Main'

export default function Home() {
  return (
    <div>
      <div className="p-24 text-xl font-bold">
        <Header />
        <Main />
        <Content content="This is my very first React page!" />
        <Content content="This is still my very first React page but the second paragraph!" />
      </div>
    </div>
  )
}
