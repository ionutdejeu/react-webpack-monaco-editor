import * as React from "react";
import "./../assets/scss/App.scss";
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';


const reactLogo = require("./../assets/img/react_logo.svg");


// Since packaging is done by you, you need
// to instruct the editor how you named the
// bundles that contain the web workers.
self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return './css.worker.bundle.js';
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}
		return './editor.worker.bundle.js';
	}
};


const App = () => {
  
  React.useEffect(()=>{
    monaco.editor.create(document.getElementById('container'), {
      value: ['{"a":1232131}'].join('\n'),
      language: 'json',
      dimension: { width: 500, height: 500}
    });
  },[])

  return (
    <div className="app">
      <div id="container"></div>
      <h1>Hello World!</h1>
      <p>Foo to the barz</p>
      <img src={reactLogo.default} height="480" />
      <div id="container" style={{
        width:"500px",
        height:"500px"
      }}></div>
    </div>
  )
}

export default App;
