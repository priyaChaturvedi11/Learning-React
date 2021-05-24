import "./App.css";
import Square from "./components/Square.js";
import Parent from "./components/Parent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParent from "./components/FRParent";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickIncrement from "./components/ClickIncrement";
import HoverIncrement from "./components/HoverIncrement";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import Counter from "./components/Counter";
import CtCompC from "./components/CtCompC";
import { UserProvider } from "./components/userContext"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  // let arr = ['Joecarr', 'Ray', 'Clown']

  return (
    <div className="App">
      {/* Tut - 43 */}
      <PostForm />

      {/* Tut - 42 */}
      {/* <PostList /> */}

      {/* <CtCompC /> */}

      {/* <UserProvider value="Hannah!!">
          <CtCompC />
      </UserProvider> */}


      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <ErrorBoundary>
        <Hero heroName='Joecarr'/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Boecarr'/>
      </ErrorBoundary> */}

      {/* {
        arr.map((hero, index, names) => 
          <ErrorBoundary>
            <Hero heroName={hero} />
          </ErrorBoundary>
        )
      } */}

      {/* <ClickIncrement name='Bella'/>
      <HoverIncrement/> */}

      {/* <PortalDemo/> */}
      {/* <FRParent /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'> Errror</h1> */}
      {/* <h1 className='success'>success</h1> */}
      {/* <h1 className={styles.success}>success</h1> */}
      {/* <Inline /> */}
      {/*<Stylesheet primary={true} />*/}
      {/*<NameList />*/}
      {/*<UserGreeting />*/}
      {/*<Parent />*/}
      {/* <Square /> */}
    </div>
  );
}

export default App;
