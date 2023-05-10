import '../style/app.css';
import { signInWithGoogle } from './Firebase';

function SignIn() {
  return (
    <div className="App">
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google to use Pic on ScoreBoard
      </button>
    </div>
  );
}

export default SignIn;
