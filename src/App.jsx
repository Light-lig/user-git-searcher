import './App.css'
import Card from './components/card';
import Form from './components/form';
import useGitProfile from './customHooks/useGitProfile';

function App() {
  const {user,isLoading,dispatch} = useGitProfile();

  return (
    <div className="App">
      <Form dispatch={dispatch}/>
      <Card user={user} isLoading={isLoading}/>
    </div>
  )
}

export default App
