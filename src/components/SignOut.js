import '../style/app.css';
import { signOutWithGoogle } from './Firebase';

function SignOut() {
  return (
    <div className="App">
      <button class="login-with-google-btn" onClick={signOutWithGoogle}>
        Sign Out with Google to stop adding Pic to ScoreBoard
      </button>
    </div>
  );
}

export default SignOut;
