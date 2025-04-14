import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        {/* შენი კონტენტი აქ */}
        <h1>Welcome to the dashboard</h1>
      </main>
    </div>
  );
}

export default App;
