import { CaptureOnScroll } from "./components/CaptureOnScroll";
import Counter from "./components/counter";
import GridLights from "./components/GridLights";
import HandleRaceExample from "./components/HandleRace";
import InfiniteScrollDomApi from "./components/InfiniteScroll";
import InfiniteScrollIntersectionObserver from "./components/InfiniteScrollIntersectionObserver";
import PopOver from "./components/popOver";
import ProgressBar from "./components/ProgressBar";
import Toaster from "./components/ToastContainer";
import ToastExample from "./components/ToastExample";
import ToggleArrayItem from "./components/ToggleArrayItem";

function App() {
  return (
    <>
      {/* <Toaster /> */}
      <div>
        {/* <DebounceSearch/> */}
        {/* <CaptureOnScroll/> */}
        {/* <ToggleArrayItem/> */}
        {/* <HandleRaceExample/> */}
        {/* <ToastExample/> */}
        {/* <InfiniteScrollDomApi /> */}
        {/* <InfiniteScrollIntersectionObserver/> */}
        {/* <ProgressBar/> */}
        {/* <Counter/> */}
        {/* <GridLights/> */}
        <PopOver>
          <PopOver.Action label={"Show"} />
          <PopOver.Content>Hello there</PopOver.Content>
        </PopOver>
      </div>
    </>
  );
}

export default App;
