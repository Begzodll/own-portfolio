import {Switch, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
//Components
import Main from "./Components/Main";
import AboutPage from "./Components/Pages/AboutPage";
import BlogPage from "./Components/Pages/BlogPage";
import WorkPage from "./Components/Pages/WorkPage";
import MySkillsPage from "./Components/Pages/MySkillsPage";

//Themes
import {ThemeProvider} from 'styled-components';
import SoundBar from "./subComponents/SoundBar";
import {LightTheme} from "./Components/Themes";

import GlobalStyle from "./GlobalStyles";

function App() {

    const location = useLocation()

    return <div>
        <GlobalStyle/>
        <ThemeProvider theme={LightTheme}>
            <SoundBar/>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/about' component={AboutPage}/>
                    <Route exact path='/blog' component={BlogPage}/>
                    <Route exact path='/work' component={WorkPage}/>
                    <Route exact path='/skills' component={MySkillsPage}/>
                </Switch>
            </AnimatePresence>
        </ThemeProvider>
    </div>

}

export default App

