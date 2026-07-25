import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { JobList } from "./Two/JobList";
// import Basic1 from "./components/Basic1";
// import Basic2 from "./components/Basic2";
// import Message from "./components/Message";
// import ProductGrid from "./components/ProductGrid";
// import TaskList from "./components/TaskList";
// import TaskList2 from "./components/TaskList2";
//import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Basic1 />
    <Basic2 />
    <Message totalTasks={3}></Message>
    <p className="mx-auto">WEB</p>
    <TaskList />
    <p className="mx-auto">Moblie</p>

    <TaskList2 />
    <ProductGrid /> */}

    <JobList />
  </StrictMode>,
);
