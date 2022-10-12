import {Task} from '../functions/taskfunctions.js';

const titleh2 = "ToDos";

  const Inputsection = () => {
    return <section className="main__section">
      <input type="text" className="main__section__input" placeholder="Enter your task" />
      <button type="submit" className="main__section__add">Add</button>
    </section>
  };
  
  
  const Tasksection = () => {
    return <section className="main__section">
      <h2 class="main__section__title">{titleh2}</h2>
      <ul>
        < Task />
      </ul>
      
    </section>;
  };
  
  
  const Main = () => {
    return <main className="main">
        < Inputsection />
        < Tasksection />
      </main>
  };


  export {Main};