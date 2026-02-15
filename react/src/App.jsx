import { CaptureOnScroll } from "./components/CaptureOnScroll";
import Counter from "./components/counter";
import GridLights from "./components/GridLights";
import HandleRaceExample from "./components/HandleRace";
import InfiniteScrollDomApi from "./components/InfiniteScroll";
import InfiniteScrollIntersectionObserver from "./components/InfiniteScrollIntersectionObserver";
import PopOver from "./components/popOver";
import ProgressBar from "./components/ProgressBar";
import DragAndDrop from "./components/DragAndDrop";
import Toaster from "./components/ToastContainer";
import ToastExample from "./components/ToastExample";
import ToggleArrayItem from "./components/ToggleArrayItem";
import SortableList from "./components/SortableList";
import StopWatch from "./StopWatch";
import Switch from "./components/Switch";
import Pagination from "./components/Pagination";
import { PAGINATION_DUMMY_DATA } from "./resources";

function App() {
  const renderRow = (data) => {
    return <div>{data}</div>;
  };
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
        {/* <PopOver>
          <PopOver.Action label={"Show"} />
          <PopOver.Content>Hello there</PopOver.Content>
        </PopOver> */}

        {/* <DragAndDrop /> */}
        {/* <SortableList /> */}
        {/* <StopWatch /> */}
        {/* <Switch /> */}
        <Pagination data={PAGINATION_DUMMY_DATA} renderRow={renderRow} />
      </div>
    </>
  );
}

export default App;
