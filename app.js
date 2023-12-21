function App() {
  return (
    <div>
      <ShoppingList {
        ...{
          name: 'Manik',
          }
      } />
    </div>
  );
}
