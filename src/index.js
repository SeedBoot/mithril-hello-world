import m from 'mithril';

const MyComponent = {
  view: () => {
    return (
      <main>
        <h1>Hello world</h1>
      </main>
    )
  }
}

m.render(
  document.body,
  <MyComponent/>
);
