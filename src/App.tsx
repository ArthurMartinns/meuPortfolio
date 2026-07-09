import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl justify-end px-6 py-6">
        <ThemeToggle />
      </header>
      <main />
    </div>
  )
}

export default App
