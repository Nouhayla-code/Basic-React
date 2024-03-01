import { useState } from "react";
import "./App.css";
import ListDemo from "./exercises/ListDemo";
import PropsDemo from "./exercises/PropsDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffect from "./exercises/UseEffect";
import FetchDemo1 from "./exercises/FetchDemo";
import Liftingstate from "./exercises/LiftingState";
import ContextDemoApp from "./exercises/ContextDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? (
              <p>All exercises for React day-1</p>
            ) : null}
            {selectedView === "PropsDemo" ? (
              <PropsDemo title="Propsdemo" />
            ) : null}
            {selectedView === "listdemo1" ? (
              <ListDemo title="listdemo" />
            ) : null}
            {selectedView === "eventDemo" ? (
              <EventDemo title="eventDemo" />
            ) : null}
            {selectedView === "FormUncontrolled" ? (
              <FormUncontrolled title="FormUncontrolled" />
            ) : null}
            {selectedView === "StateDemo1" ? (
              <StateDemo1 title="StateDemo1" />
            ) : null}
            {selectedView === "StateDemo2" ? (
              <StateDemo2 title="StateDemo2" />
            ) : null}
            {selectedView === "StateDemo3" ? (
              <StateDemo3 title="StateDemo3" />
            ) : null}
            {selectedView === "UseEffect" ? (
              <UseEffect title="UseEffect" />
            ) : null}
            {selectedView === "fetchDemo" ? (
              <FetchDemo1 title="FetchDemo1" />
            ) : null}
            {selectedView === "liftingstate" ? (
              <Liftingstate title="LiftingState" />
            ) : null}
            {selectedView === "contextDemo" ? (
              <ContextDemoApp title="ContextDemo" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
  btnStyle?: string;
};

const Buttons = ({ onSelected, btnStyle }: ButtonProps) => {
  return (
    <>
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("info")}
      >
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("PropsDemo")}
      >
        PropsDemo
      </button>
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("listdemo1")}
      >
        List demo1
      </button>
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("eventDemo")}
      >
        Event Demo
      </button>
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("FormUncontrolled")}
      >
        Form Uncontrolled
      </button>
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("StateDemo1")}
      >
        State Demo1
      </button>
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("StateDemo2")}
      >
        State Demo2
      </button>
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("StateDemo3")}
      >
        State Demo3
      </button>
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("UseEffect")}
      >
        UseEffect
      </button>
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("fetchDemo")}
      >
        Fetch Demo
      </button>
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("liftingstate")}
      >
        Lifting State
      </button>
      <button
        className={`btn-w100 ${btnStyle}`}
        onClick={() => onSelected("contextDemo")}
      >
        Context Demo
      </button>
    </>
  );
};
