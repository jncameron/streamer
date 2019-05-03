import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streamcreate" component={StreamCreate} />
          <Route path="/streamedit" component={StreamEdit} />
          <Route path="/streamdelete" component={StreamDelete} />
          <Route path="/streamshow" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;