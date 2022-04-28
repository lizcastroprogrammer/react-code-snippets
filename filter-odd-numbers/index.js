// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar({ menuitems }) {
    const { Button } = ReactBootstrap;
    const filteredList = menuItems.filter(item => item % 2 == 1);
    const updatedList = filteredList.map((listItem, index) => {
      return <Button key={index.toString()}>{listItem}</Button>;
    });
    // note that React needs to have a single Parent
    return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
  }
  const menuItems = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NavBar menuitems={menuItems} />,
    document.getElementById("root")
  );
  