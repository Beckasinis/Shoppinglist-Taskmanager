function About() {
  return (
    <div className="container">
      <h2>Om appen</h2>
      <div className="glass-card">
        <h3>My sisters analog Shoppinglist that gave me this idea, has been translated into a userfriendly app!</h3>

        <p>This is totally a project of learning React. I have built two different projects, a shoppinglist and a taskmanager, but I
          choose to keep them in the same project because I wanted to learn how to extent the maptree with all files instead of starting
          over again and build the start of it.</p>

        <p>I have used React with Vite and it uses localStorage to save things. It uses useState, useEffect, useContext och React Router.</p>
        <div className="glass-card">
          <h2>The focus!</h2>
          <p>My sister maybe have an odd way of shopping her groceries. Or many other people are just like her, I don't know. But her
            analog list is very systematic written. She writes everything what she will buy in order after the way the shop have
            their groceries. It makes her able to go from top to bottom buying what she will have from her list.</p>

          <p>And that's the idea of this app. I wanted to build something what would make it easy for her, and others, to implement
            the groceries to the correct section; like 'fruit and vegetables' or 'meat and charcuterie'. And then depending on what
            store she will shop at, she can change the order of the sections so that her list always matches the store she will
            visit.</p>
        </div>
        <div className="glass-card">
          <h2>The shopping-list</h2>
          <p>In this list you can add what you will buy and connect it to the right section. I have choosen 14 sections what should
            cover all what any grocerystore has. The sections are:</p>

          <ul style={{ listStyleType: 'none' }}>
            <li>Bageri - Bakery</li>
            <li>Delikatess - Delicacy</li>
            <li>Djurmat - Food for animals</li>
            <li>Drycker - Drinks</li>
            <li>Frukt & Grönt - Fruit and Vegetables</li>
            <li>Fryst - Frozen</li>
            <li>Förbutik - Convenience store (lottery or post)</li>
            <li>Hygien - Hygiene</li>
            <li>Kött & Chark - Meat and Charcuteries</li>
            <li>Mejeri - Dairy</li>
            <li>None-Food - None-Food</li>
            <li>Skafferi - Dry things</li>
            <li>Städ - Cleaning</li>
            <li>Övrigt - Other</li>
          </ul>
          <br />
          <p>I have put the last one called 'Other' to put things what don't match in any other section.
            The magic happenes when you can place the sections in what order you want, depending on what store you choose to shop in.
            And when you have put something from your list in your physical cart you push it in the app and it will be crossed out
            and get placed in the bottom of the section it belongs to. So that you always has the products what you still will buy in
            the top.</p>

          <p>I have also choosen to make a manual reminder if you have cupons or deposit from bottles. If you have it you push the
            button of either cupons or deposits or both, and when you are all done in the store you push the big green button that
            overflows and always are in the bottom of your screen. Reality is that sometimes you don't get all things from your
            shoppinglist so I choose to make the reminder manual instead of letting the reminder come when all in the list is marked
            as done.</p>
        </div>
        <div className="glass-card">
          <h2>The Task-Manager</h2>
          <p>The task-manager was my very first thing what I made as a learning project of React. It's very simple to use. You are
            able to put your tasks in the list with a title and a description and save them in the list. You can delete a task, you
            can edit a task, both title and description and you can toggle the tasks by 'done' and 'todo'. If you push the task, it
            will be marked as done and will be placed in the bottom of the list. I made 3 categories to filter the tasks in. All,
            Todo and Done tasks. So if you push either of them you only see the tasks what they represent. You can also search for
            your tasks in the searchfield.</p>

          <p>I have put this to my GitHub Pages so that I myself can use it and also my sister, and of course others thast think it's
            useful. My plan is to develoupe it even more in my next projectcourse and it will be powerful improvements on it. As a matter
            of fact, I have plans to make it much more advanced than this one is.</p>

          <p>A really great way of learning React!</p>
        </div>
        <div className="glass-card">
          <h2>Den tekniska arkitekturen på svenska</h2>
          <p>Grunden i mitt projekt vilar på Vite, en modern byggverktygskedja som ger en extremt snabb utvecklingsmiljö och en effektiv optimering av slutprodukten. Ovanpå detta har jag byggt applikationen med React, där man utnyttjar ett komponentbaserat tänkande för att dela upp gränssnittet i logiska och återanvändbara delar, såsom inköpslistan, kategorichips och inmatningsfält.</p>

          <p>För att hantera appens "hjärna" och undvika krånglig dataöverföring mellan komponenter, har jag implementerat en centraliserad statshantering via React Context API. Detta fungerar som ett globalt minne där information om varor, kategoriernas ordning och påminnelser lagras. Genom att kombinera detta med Hooks (som useState och useEffect) skapas en reaktiv upplevelse; så fort användaren lägger till en vara eller flyttar en kategori, slår ändringen igenom omedelbart i hela applikationen och sparas dessutom permanent i webbläsarens LocalStorage.</p>

          <p>Det som gör applikationen unik är hur skillnaden mellan rådata och användarens vy hanteras. Istället för att visa en statisk lista över alla 14 fördefinierade kategorier, används en dynamisk rendering. Genom att filtrera kategorilistan i realtid visas endast de sektioner som faktiskt innehåller varor. Detta skapar en ren och fokuserad användarupplevelse, men ställer höga krav på sorteringslogiken.</p>

          <p>Den specialbyggda sorteringsfunktion är hjärtat i detta system. När en användare klickar på en pil, beräknar appen kategorins visuella index snarare än dess fasta plats i databasen. Funktionen identifierar nästa synliga granne och byter plats med den i bakgrunden, vilket gör att kategorierna "hoppar" över dolda tomrum på ett sömlöst sätt. För att säkerställa att detta inte skapar ett hoppigt gränssnitt, har layouten stabiliserats med modern CSS (Flexbox) och fasta bredder, vilket garanterar att knappar och rubriker ligger kvar i en perfekt linje oavsett hur listan sorteras om.</p>

          <p>Slutresultatet är en tekniskt avancerad lösning gömd bakom ett enkelt och intuitivt yttre. En robust arkitektur byggd för att underlätta vardagen för användaren.</p>
        </div>
      </div>
    </div >
  );
}

export default About;