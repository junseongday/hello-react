import React from 'react';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제이름은 {name}입니다.
      <br />
      childre 값은 {children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본이름'
};

export default MyComponent;
