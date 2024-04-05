import styles from './App.module.css'
import { Navbar } from './components/nav/Navbar';
import { Hero } from './components/hero/Hero';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>

  )
}

export default App
