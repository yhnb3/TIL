# key와 리렌더링

ㅏkey => value를 특정하는 이름.

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <div id="root"></div>
    <script type="text/babel">
      const rootElement = document.getElementById("root");

      const todos = [
        { id: 1, value: "wash dishes" },
        { id: 2, value: "clean the bed" },
        { id: 3, value: "Running" }
      ];

      const App = () => {
        const [items, setItems] = React.useState(todos);

        const handleClick = (todo) => {
          console.log(todo);
          setItems((items) => items.filter((item) => item !== todo));
        };

        const handleRestoreClick = () => {
          setItems((items) => [
            ...items,
            todos.find((item) => !items.includes(item))
          ]);
        };

        return (
          <>
            {items.map((todo) => (
              <div key={todo.id}>
                <span>{todo.value}</span>
                <button onClick={() => handleClick(todo)}>done</button>
              </div>
            ))}
            <button onClick={handleRestoreClick}>Restore</button>
          </>
        );
      };

      ReactDOM.render(<App />, rootElement);
    </script>
  </body>
</html>

```

