import type { PropsWithChildren } from "react";

type Props = { heading: string } & PropsWithChildren;

const TodoWrapper = (props: Props) => {
  return (
    <div className="todo-wrapper">
      <h1>{props.heading}</h1>
      <div className="todo-wrapper--main">{props.children}</div>
    </div>
  );
};

export default TodoWrapper;
