import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;

// 이 컴포넌트는 우리가 곧 이어 만들 TodoItem 컴포넌트 여러개를 렌더링해주는 역할을 합니다.
// 우리가 Template 컴포넌트를 만들었기 때문에 이 컴포넌트에선 따로 스타일링 할 건 없어요.

// ‘리스트’ 를 렌더링하게 될 때는, 특히 보여주는 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성하세요.
// 그 이유는, 클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능 최적화를 할 수 있기 때문입니다.

// 사실 이렇게 작은 프로젝트에서는 컴포넌트 성능 최적화를 따로 해주지 않아도 매우 빠르게 작동합니다.
// 하지만, 만약에 리스트 내에서 렌더링하게 될 컴포넌트가 몇백개가 될 수도 있다면 더 나은 유저 경험을 위해선
// 컴포넌트 최적화는 필수입니다!
