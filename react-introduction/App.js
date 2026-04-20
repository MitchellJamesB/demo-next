function App() {
    return (
      <div>
        <Navbar />
        <div className="p-24 text-xl font-bold">
          <Header />
          <Main />
          <Content content="This is my very first React page!"/>
          <Content content="This is still my very first React page but the second paragraph!"/>
        </div>
        <Footer />
      </div>
    );
  }

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);