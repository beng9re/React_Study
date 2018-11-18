import React, { Component } from 'react';
import Myname from './Myname';
import Myname2 from './FunctionalCompnent';
//리액트를 사용하겠다 Componet 리액트 선언
// Fragment
import './App.css';

class App extends Component {
  render() {
    /*
    const style = {
      backgroundColor: 'black',
      paddong: '16px',
      color: 'white',
      fontSize: ['36px']
    };
    */

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

    Arrow Function Test

        {function() {
          if (name === 'test입)니다') return <div>야호</div>;
        }}
        {(a => {
          return <div className="App">{a}</div>;

    return (
      <div>
        <div>{name === 'test입니다' ? '맞아' : '틀려'}</div>

        {}

        {function() {
          if (name === 'test입니다') return <div>야호</div>;
        }}
        {(a => {
          return <div>{a}</div>;


  
   
    */

    /*스타일 적용*/
    /// CSS를 다음과 같이 묶을수 있음

    /* 리액트는 Class 를 Class Name을  
     <div>
        <div style={style}> {name === 'test입니다' ? '맞아' : '틀려'}</div>
      </div>
    
    */

    //const name = 'test입니다';

    //return <Myname name="안녕" />;
    //return <Myname />;
    return <Myname2 />;
  }
}

export default App;
