import { Switch, Route } from "react-router-dom";

//Components
import Main from "./Components/Main";
import AboutPage from "./Components/Pages/AboutPage";
import BlogPage from "./Components/Pages/BlogPage";
import WorkPage from "./Components/Pages/WorkPage";
import MySkillsPage from "./Components/Pages/MySkillsPage";

//Themes
import {ThemeProvider} from 'styled-components';
import {LightTheme} from "./Components/Themes";

import GlobalStyle from "./GlobalStyles";

function App() {
    return <div>
        <GlobalStyle/>
        <ThemeProvider theme={LightTheme}>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/about' component={AboutPage}/>
                <Route exact path='/blog' component={BlogPage}/>
                <Route exact path='/work' component={WorkPage}/>
                <Route exact path='/skills' component={MySkillsPage}/>
            </Switch>
        </ThemeProvider>
    </div>

}

export default App

