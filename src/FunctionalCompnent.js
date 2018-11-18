//함수형 컴포넌트 COmpnet 필요 없음
import React from 'react';

//디폴트 프롭스
//디폴트 테스트
const FunctionalCompnent = ({ name }) => {
  return <div>안녕하세요 함수형 컴포넌트 {name} 입니다</div>;
};

FunctionalCompnent.defaultProps = {
  name: 'test'
};

export default FunctionalCompnent;
