import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import Projects from "./pages/Projects/Projects";
import MovingAwayFromSubstack from "./pages/Blog/MovingAwayFromSubstack/MovingAwayFromSubstack";
import RealWorldStatsForBootstrapping from "./pages/Blog/RealWorldStatsForBootstrapping/RealWorldStatsForBootstrapping";
import ToDoListThatWorks from "./pages/Blog/ToDoListThatActuallyWorks/ToDoListThatActuallyWorks";
import EnvisioningFutureWithGPT from "./pages/Blog/EnvisioningFutureWithGPT/EnvisioningFutureWithGPT";
import ChatGPTInDiffudle from "./pages/Blog/ChatGPTInDiffudle/ChatGPTInDiffudle";
import LiQuoridor from "./pages/Projects/LiQuoridor";
import HNCommentsDrawer from "./pages/Projects/HNCommentsDrawer";
import ColdMessageAI from "./pages/Projects/ColdMessageAI";
import WorkaroundGPT from "./pages/Projects/WorkaroundGPT";
import Diffudle from "./pages/Projects/Diffudle";
import HeadlineHero from "./pages/Projects/HeadlineHero";
import NodeSaas from "./pages/Projects/NodeSaas";
import HNCommentsDrawerDemo from "./pages/Misc/HNCommentsDrawerDemo";
import Resurrecting from "./pages/Projects/Resurrecting";
import "./App.css";
import HireMe from "./pages/HireMe";
import SkillTree from "./pages/SkillTree";
import LLMVulnerabilityPlayground from "./pages/Blog/PlaygroundForLLMVulnerabilites/LLMVulnerabilityPlayground";
import Bookmarks from "./pages/Misc/Bookmarks";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/hireme" element={<HireMe />} />
                    <Route path="/skillTree" element={<SkillTree />} />

                    {/* Routes for individual blog posts */}
                    <Route
                        path="/blog/playing-with-llm-vulnerabilities"
                        element={<LLMVulnerabilityPlayground />}
                    />
                    <Route
                        path="/blog/moving-away-from-substack"
                        element={<MovingAwayFromSubstack />}
                    />
                    <Route
                        path="/blog/real-world-stats-for-bootstrapping"
                        element={<RealWorldStatsForBootstrapping />}
                    />
                    <Route
                        path="/blog/todo-list-that-actually-works"
                        element={<ToDoListThatWorks />}
                    />
                    <Route
                        path="/blog/envisioning-a-future-with-gpt"
                        element={<EnvisioningFutureWithGPT />}
                    />
                    <Route
                        path="/blog/chatgpt-in-diffudle"
                        element={<ChatGPTInDiffudle />}
                    />

                    {/* Routes for individual projects */}

                    <Route
                        path="/projects/resurrecting"
                        element={<Resurrecting />}
                    />
                    <Route
                        path="/projects/li-quoridor"
                        element={<LiQuoridor />}
                    />
                    <Route
                        path="/projects/hn-comments-drawer"
                        element={<HNCommentsDrawer />}
                    />
                    <Route
                        path="/projects/cold-message-ai"
                        element={<ColdMessageAI />}
                    />
                    <Route
                        path="/projects/workaround-gpt"
                        element={<WorkaroundGPT />}
                    />
                    <Route path="/projects/diffudle" element={<Diffudle />} />
                    <Route
                        path="/projects/headline-hero"
                        element={<HeadlineHero />}
                    />
                    <Route path="/projects/node-Saas" element={<NodeSaas />} />
                    <Route
                        path="/misc/hn-comments-drawer-demo"
                        element={<HNCommentsDrawerDemo />}
                    />

                    <Route path="/misc/bookmarks" element={<Bookmarks />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
