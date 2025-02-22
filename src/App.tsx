import '../src/css/globals.css'
import Header from './components/header'
import Post from './components/post'
import Profile from './components/profile'

export default function App() {
  

  return (
    <>
      <Header></Header>
      <main>
        <div style={ {marginTop: '40px', marginLeft: '40px'}}>
          <Profile></Profile>
        </div>
        <div style={{ marginTop: '40px'}}>
          <Post></Post>
          <Post></Post>
        </div>
      </main>
    </>
  )
}
