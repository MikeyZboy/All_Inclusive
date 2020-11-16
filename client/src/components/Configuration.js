import React, { FC } from "react";
import {
  Layout,
  LayoutNavigationTree,
  useLayoutNavigation,
} from "@react-md/layout";
import {
  AppsSVGIcon,
  BookSVGIcon,
  HomeSVGIcon,
  MenuSVGIcon,
  TVSVGIcon,
} from "@react-md/material-icons";
import { Text } from "@react-md/typography";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

const navItems: LayoutNavigationTree = {
  "/": {
    itemId: "/",
    parentId: null,
    children: "Home",
    leftAddon: <HomeSVGIcon />,
    to: "/",
  },
  "/route-1": {
    itemId: "/route-1",
    parentId: null,
    children: "Route 1",
    leftAddon: <TVSVGIcon />,
    to: "/route-1",
  },
  "/route-2": {
    itemId: "/route-2",
    parentId: null,
    children: "Route 2",
    leftAddon: <AppsSVGIcon />,
    to: "/route-2",
  },
  "/route-3": {
    itemId: "/route-3",
    parentId: null,
    children: "Route 3",
    leftAddon: <BookSVGIcon />,
    to: "/route-3",
  },
};

const Home: FC = () => <Text>Home Page</Text>;
const Route1: FC = () => <Text>First Route</Text>;
const Route2: FC = () => <Text>Second Route</Text>;
const Route3: FC = () => <Text>Third Route</Text>;

const App: FC = () => {
  const { pathname } = useLocation();

  return (
    <Layout
      title="Example Title"
      navHeaderTitle="Example Nav Title"
      treeProps={useLayoutNavigation(navItems, pathname, Link)}
    >
      <Switch>
        <Route path="/route-1" component={Route1} />
        <Route path="/route-2" component={Route2} />
        <Route path="/route-3" component={Route3} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default function MyApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}