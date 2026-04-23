function About() {
  return (
    <div className="container">
      <h2>Om Task Manager</h2>
      <div className="glass-card">
        <p>Shoppinglistan och Taskmanagern är båda byggda med React som ett inlärningsprojekt. Den använder useState, useEffect, useContext och React Router.</p>
      </div>
      <div className="glass-card">
        <p>Den använder useState, useEffect, useContext och React Router.</p>
      </div>
      <div className="glass-card">
        <h1>My sisters analog Shoppinglist has been translated into a userfriendly app!</h1>

        This is totally a project of learning React. I have built two different projects, a shoppinglist and a taskmanager, but I choose to keep them in the same project because I wanted to learn how to extent the maptree with all files instead of starting over again and build the start of it.

        I have used React with Vite and it uses localStorage to save things.
        <div className="glass-card">
          <h2>The focus!</h2>
          My sister maybe have an odd way of shopping her groceries. Or she is like many other people, I don't know. But her
          analog list is very systematic written. She writes everything what she will buy in order after the way the shop have
          their things. So that she can go from top to bottom buying what she will have from her list.

          So that's the idea of this app. I wanted to build something what would make it easy for her to implement her
          groceries to the correct section; like 'fruit and vegetables' or 'meat and charcuterie'. And then depending on what
          store she will shop at, she can change the order of the sections so that her list always matches the store she will
          visit.
        </div>
        <div className="glass-card">
          <h2>The shopping-list</h2>
          In this list you can add what you will buy and connect it to the right section. I have choosen 14 sections what should
          cover all what any grocerystore has. The sections are: <br>
            <br>
              Delikatess      - Delicacy
              Djurmat         - Food for animals
              Drycker         - Drinks
              Frukt & Grönt   - Fruit and Vegetables
              Fryst           - Frozen
              Förbutik        - Convenience store (lottery or post)
              Hushåll         - Household
              Hygien          - Hygiene
              Kött & Chark    - Meat and Charcuteries
              Mejeri          - Dairy
              None-Food       - None-Food
              Skafferi        - Dry things
              Städ            - Cleaning
              Övrigt          - Other

              I have put the last one called 'Other' to put things what don't match in any other section.
              The magic happenes when you can place the sections in what order you wnat, depending on what store you choose to shop in.
              And when you have put something from your list in your physical cart you push it in the app and it will be crossed out
              and get placed in the bottom of the section it belongs to. So that you always has the products what you still will buy in
              the top.
              All is sorted in alphabetic order.
              I have also choosen to make a manual reminder if you have cupons or deposit from bottles. If you have it you push the
              button of either cupons or deposits ot both, and when you are all done in the store you push the big green button that
              overflows and always are in the bottom of your screen. It can happen that you don't get all things from your shoppinglist
              so I choose to make it manual instead of letting the reminder come when all in the list is marked as done.
            </div>
            <div className="glass-card">
              <h2>The task-manager</h2>
              The task-manager was my very first thing what I made as a learning project of React. You are able to put your tasks in the
              list with a title and a description and save them in the list. The tasks are automatically sorted in alphabetic order.
              You can delete a task, you can edit a task, both title and description and you can toggle the tasks by 'done' and 'not done'.
              If you push it it marks as done and will be placed in the bottom of the list. I made 3 categories to filter the tasks in.
              All, Todo and Done tasks. So if you push either of them you only see what they represent. You can also search to find your
              tasks by the searchfield.

              I have put this onto my GitHub Pages so that I myself can use it and also my sister, and others. Before I, in my next project
              course will make some improvements on it. As a matter of fact, I have plans to make it much more advanced then this one is.

              A really great way of learning React!
            </div>
        </div>
      </div>
    </div >
  );
}

export default About;