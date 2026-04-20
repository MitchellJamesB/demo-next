import Card from './Card'
import Flex from './Flex'

// inside Main.js
const cards = [
  {
    title: 'Another Coldest Sunset',
    img: 'https://images.unsplash.com/photo-1773609108583-4f0040c75e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'The Blue Marble',
    img: 'https://images-assets.nasa.gov/image/art002e000192/art002e000192~large.jpg?w=1920&h=1280&fit=clip&crop=faces%2Cfocalpoint',
  },
  {
    title: 'The Deepest Depths',
    img: 'https://www.oqfoundation.org/wp-content/uploads/2025/01/spotlite-2048x1367.jpg',
  },
]

export default function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.img} />
        ))}
      </div>
      <Flex classNames="bg-blue-600 text-blue-100">
        <span>Child tag one</span>
        <span>Child tag two</span>
        <span>Child tag three</span>
      </Flex>
    </main>
  )
}
