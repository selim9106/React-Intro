const tasks = ["firsttask", "secondtask", "thirdtask", "fourthtask", "fifthtask"];

// TODO: Array + Loop
const Task = () => { 
    return tasks.map((item) => (<li class="main__section__task"><input type="checkbox" name="main__section__checkbox" unchecked /> {item}</li>)
  )};

export {Task};