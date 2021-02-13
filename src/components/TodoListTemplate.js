import React from "react";
import "../components/TodoListTemplate.css";

// 비구조화할당
// form 인풋과 버튼 컴포넌트 렌더링 할 때 사용
// children
const TodoListTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">오늘 할 일</div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;

// 이 Template은 하나의 "틀" 이라고 보면된다

// 이 컴포넌트는 함수형 컴포넌트입니다.
// 파라미터로 받게되는 것은 props(소품)인데요, 이를 비구조화할당 하여 원래는
// (props) => {...} 해야 하는 것을,
// ({form, children}) => { ... } 형태로 작성했습니다.

// 이 컴포넌트는 두가지의 props 를 받게 돼요. children 의 경우엔 나중에 우리가 이 컴포넌트를 사용하게 될 때
// <TodoListTemplate>여기에 있는 내용!</TodoListTemplate>
// 이 들어가게 됩니다 (태그의 사이).

// 여기서 form 은, 우리가 나중에 인풋과 버튼이 들어가있는 컴포넌트를 렌더링 할 때 사용 할 건데요,
// 이것도 마치 children 을 사용하듯이 JSX 형태로 전달을 해줄겁니다.

{
  /* <TodoListTemplate form={<div>이렇게 말이죠.</div>}>
    <div>여기엔 children 자리구요.</div>
</TodoListTemplate> */
}

// 여러 종류의 JSX 를 컴포넌트의 props 로 넣어주려면 위와 같은 방법은 정말 편합니다. 앞으로도 자주 사용하자 !!
