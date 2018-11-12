import React, { Component, Fragment } from 'react';
//리액트를 사용하겠다 Componet 리액트 선언
// Fragment

class App extends Component {
  render() {
    //JSX 형태를 리턴 해줘야함
    //태그는 꼭 닫아줘야함

    /*
    <Fragment> //원래는 두개 같은 엘레멘트는 꼭 묶어줘야하지만  Fragment를 쓴다면 해결이 가능하다.

      <div>
        <h1>안녕하세요 리액트</h1>
      </div>
      <div>
        <h1>안녕하세요 리액트</h1></div>

    </Fragment>

   //삼항 연산자 : {name === 'test입니다' ? '맞아' : '틀려'}</div>
   // name === 'test' && <div> 선언 </div> 문자열 합처줌

    */

    /**/

    const name = 'test입니다';

    return (
      <div>
        <div>{name === 'test입니다' ? '맞아' : '틀려'}</div>
        {function() {
          if (name === 'test입니다') return <div>야호</div>;
        }}
        {() => {
          return <div>aa</div>;
        }}
        {(function() {
          if (name === 'test입니다') return <div> 나와 </div>;
        })()}

        {(() => {
          if (name === 'test입니다') return <div> 뭐</div>;
        })()}
      </div>
    );
  }
}

export default App;
