import './App.css';
import {  Link  } from 'react-router-dom';

function Links() {
  return (
      <>

    <Link to="/countdown"><button>
              Go to Countdown
            </button>
            </Link>

    <Link to="/jokes"><button>
        Go to Jokes
    </button>
    </Link>

</>
  );
}

export default Links;
