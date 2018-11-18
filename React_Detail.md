
# __React__
* ##### React 개요
  * Vitual Dom 기반 : 변화만 필요한 부분만 다시그리는 형식
  * WebPack : JS 를 합치고 빌드 해주는것
  * Babel : (JavaScript Compiler) 모던 JS 를 구버전으로 변환 해주는것
  * JSX : React를 위한 자바 스크립트

<hr></hr>

  ### #JSX
   *  테그는 꼭 닫아줘야함

   * 변수
      * var  지양
      * const 고정적인 값
      * let :유동적인 값    


   * 삼항 연산자  
     1+1 === 2 (비교) ? '맞다' (참) : 틀리다 (거짓)

   * < Fragment>  < /Fragment> : Div Div 중복 DIV 방지

   * CSS(clsass)  
 React에서는 Class를 선언하고 사용



* 주석  

<pre><code>{/* 주석 */}</code></pre>

* 비 구조화 할당 문법

<pre><code>
const object =  {a:1,b:2};
const {a,b} = object ;
//a: 1 b:2

function test({n,a}){
  colsole.log(n+'asd'+a)
}
test({n:asd,a:asd})



</code></pre>



<hr></hr>
 ### #Props 와 Componet
 * Props  
 부모가 자식에게 넘겨주는 값

* DefaultPorps
 * case:1  
 <pre><code>
 static defaultProps = {
    name: '기본이름'
  }; //디폴트 프롭스  


  </code></pre>
  *  case:2  
  <pre><code>
  Myname.defaultProps = {
    name: 'defaf'
  };

  </code></pre>




<hr>
</hr>

### #함수형 컴포넌트 VS 컴포넌트

* 함수형 컴포넌트가 더빠름










<hr></hr>
* #### 별첨
 * CodeSendBox : 웹에서 코드 작성 가능 https://bit.ly/beginreact
 * JavaScript : 문법 https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%86%8C%EA%B0%9C
