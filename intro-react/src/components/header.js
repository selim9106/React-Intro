
const title = "To Do app";
const Title = () => <h1 className="header__title">{title}</h1>;

const Header = () => {
    return <header className="header">
    < Title />
  </header>
  };
  
export {Header};