import DropdownLayout from './components/DropdownLayout'
import styles from './App.module.css'

function App(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.components}>
          <div>
            <h2>Dropdown Layout</h2>
            <DropdownLayout
              title="About React"
              iconSrc="https://www.svgrepo.com/show/452092/react.svg"
            >
              <p>
                React lets you build user interfaces out of individual pieces
                called components.
              </p>
            </DropdownLayout>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
