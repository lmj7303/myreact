import logo from './logo.svg';
import './App.css';
import './test.css';//외부 CSS파일 import
import App2 from './App2';
import First from './compo/App01';
import Second from './compo/App02';

function App() {

  const name="승환";
  const data="First";

  //return 안에 사용자 정의 태그 구조를 작성할수 있다.
  return (
    //JSX 문법-> JS와 HTML을 같이 사용할 수있는 문법!
    //규칙1:꼭 html 구조는 한가지 태그로 묶여있어야 한다.
    //규칙2:모든 태그는 여는 태그와 닫는 태그 둘다 존재하여야만 한다.

    //빈태그(Fragment)로도 묶어서 사용이 가능하다.
    //규칙 4. class를 지정해줄 때는 className이라는 키워드를 사용한다.
    <>
      <h1 className='first'>HELLO REACT</h1>
      <h1 style={{color:"red"}} id="test">월요일 파이팅!</h1>
      {/* ctrl+'/' ->주석        
      변수를 사용할때는 {변수명}으로 사용한다. 
      규칙3.
        JSX 문법 안세서는 사용할 수있는 JS문법이 제한 되어있다. 
        삼항 연산자는 가능하다. 
      name에 있는 값이 승환-> 내 이름은 승환 
      name에 있는 값이 다른 값-> 내 이름은 영표 */}
      <h1>나의 이름은 {name=='승환'?"승환":"영표"}</h1>
      <App2></App2>
      {data=='First'?<First></First>:<Second></Second>}
    </>
    //<h1>HELLO REACT <br></br> 월요일 파이팅!</h1>
  );
}

//위에서 만들어놓은 사용자 정의 태그를 내보내겠습니다.
export default App;
