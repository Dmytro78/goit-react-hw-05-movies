import { lazy, Suspense } from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Container from "../Container/Container";
import LoaderView from "../Loader/Loader";
import "./App.css";

const HomeView = lazy(() =>
  import("../../views/HomeView" /* webpackChunkName: "home-view" */)
);

const MovieDetailsView = lazy(() =>
  import("../../views/MovieDetailsView" /* webpackChunkName: "home-view" */)
);

const MoviesView = lazy(() =>
  import("../../views/MoviesView" /* webpackChunkName: "movies-view" */)
);

function App() {
  return (
    <Container>
      <NavigationBar />
      <Suspense fallback={<LoaderView />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviesView />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
