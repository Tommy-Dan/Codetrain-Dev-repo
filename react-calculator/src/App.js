import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="row col12-bg text-right text-color">
            <div className="col-sm-12">
                <h1>0</h1>
            </div>
        </div>
        <div className="row thick-border text-center">
            <div className="col-sm-3 gray-area">
                <h1>AC</h1>
            </div>
            <div className="col-sm-3 gray-area left-border">
                <h1>+/-</h1>
            </div>
            <div className="col-sm-3 gray-area left-border">
                <h1>%</h1>
            </div>
            <div className="col-sm-3 operators-col left-border text-color">
                <h1>÷</h1>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-sm-3 gray-area">
                <h1>7</h1>
            </div>
            <div className="col-sm-3 gray-area left-border">
                <h1>8</h1>
            </div>
            <div className="col-sm-3 gray-area left-border">
                <h1>9</h1>
            </div>
            <div className="col-sm-3 operators-col left-border text-color">
                <h1>x</h1>
            </div>
        </div>
        <div className="row thick-border text-center">
            <div className="col-sm-3 gray-area">
                <h1>4</h1>
            </div>
            <div className="col-sm-3 gray-area left-border">
                <h1>5</h1>
            </div>
            <div className="col-sm-3 gray-area left-border">
                <h1>6</h1>
            </div>
            <div className="col-sm-3 operators-col left-border text-color">
                <h1>-</h1>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-sm-3 gray-area">
                <h1>1</h1>
            </div>
            <div className="col-sm-3 gray-area left-border">
                <h1>2</h1>
            </div>
            <div className="col-sm-3 gray-area left-border">
                <h1>3</h1>
            </div>
            <div className="col-sm-3 operators-col left-border text-color">
                <h1>+</h1>
            </div>
        </div>
        <div className="row thick-border text-center">
            <div className="col-sm-6 gray-area">
                <h1>0</h1>
            </div>
            <div className="col-sm-3 gray-area left-border">
                <h1>.</h1>
            </div>
            <div className="col-sm-3 operators-col left-border text-color">
                <h1>=</h1>
            </div>
        </div>

      </div>
  );
}

export default App;
