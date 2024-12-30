import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';

export default function SixDegrees() {
  const Ref = useRef(null);

  const actorList = ['Jack Black', 'Tom Hardy', 'Tom Holland', 'Jessica Biel', 'Mark Wahlberg', 'Jeff Bridges', 'Kit Harington', 'Mark Ruffalo', 'Tony Danza', 'Tim Allen', 'Selena Gomez', 'Mel Gibson', 'Timothy Olyphant', 'Emile Hirsch', 'Maggie Smith', 'Brad Pitt', 'Denzel Washtington', 'Glen Powell', 'Tom Cruise', 'Chris Hemsworth', 'Timothee Chalamet', 'Samuel L. Jackson', 'Austin Butler', 'Channing Tatum', 'Zendaya', 'Chris Pratt', 'Sydney Sweeney', 'Dave Bautista', 'Willem Dafoe', 'Margot Robbie', 'Florence Pugh', 'Jason Stathem', 'Joaquin Phoenix', 'Hugh Grant', 'Colin Farrell', 'Paul Dano', 'Miles Teller', 'Pedro Pascal', 'Matt Damon', 'Ben Affleck', 'Rebecca Ferguson', 'Christin Milioti', 'Kate Beckinsale', 'Marisa Tomei', 'Alan Ritchson', 'Ali Larter', 'Demi Moore', 'Billy Bob Thornton', 'Jon Hamm', 'John Cena', 'Courteney Cox', 'David Arquette', 'Martin Short', 'Peter Dinklage', 'Sylvester Stallone', 'Steve Martin', 'Eddie Murphy', 'Morgan Freeman', 'Harrison Ford', 'Robert De Niro', 'Al Pacino', 'Dustin Hoffman', 'Robert Downey Jr.', 'Johnny Depp', 'Leonardo DiCaprio', 'Will Smith', 'Dwayne Johnson', 'Vin Diesel', 'Jason Momoa', 'Keanu Reeves', 'Chris Evans', 'Ryan Reynolds', 'Chris Pine', 'Chris Rock', 'Chris Tucker', 'Chris O\'Donnell', 'Chris Cooper', 'Chris Klein', 'Chris Noth', 'Chris Kattan', 'Chris Messina', 'Chris Elliott', 'Kerry Washington', 'Terry Crews', 'Rob Schneider', 'Kevin James', 'Amy Poehler', 'Amy Adams', 'Amy Schumer', 'Amy Smart', 'Amy Sedaris', 'Cameron Diaz', 'Claire Danes', 'Dave Franco', 'James Franco', 'Zac Efron', 'Zach Galifianakis', 'Zachary Levi', 'Theo Rossi', 'Heath Ledger', 'Jake Gyllenhaal', 'Jake Johnson', 'Zoe Saldana', 'Zoe Kravitz', 'Zoey Deutch', 'Zooey Deschanel', 'Bill Paxton', 'Bill Pullman', 'Bill Murray', 'Bill Hader', 'Bill Nighy', 'Bill Skarsgard', 'Bill Burr', 'Daniel Radcliffe', 'Julianne Nicholson', 'Nicolas Cage', 'Owen Wilson', 'J.K. Simmons', 'Jude Law', 'Julia Roberts', 'Julianne Moore', 'Katherine Heigl', 'Kevin Smith', 'Kevin Spacey', 'Kristen Bell', 'Kristen Stewart', 'Kristen Wiig', 'Jennifer Aniston', 'Jennifer Connelly', 'Jennifer Garner', 'Jennifer Lawrence', 'Jennifer Lopez', 'Luke Wilson', 'Luke Evans', 'Luke Hemsworth', 'Ana de Armas', 'Scott Caan', 'Oliver Platt', 'Olivia Munn', 'Olivia Wilde', 'Olivia Cooke', 'Rachel Leigh Cook', 'Jared Leto', 'Will Ferrell', 'Will Arnett', 'Will Forte', 'Will Poulter', 'David Harbour', 'David Duchovny', 'David Boreanaz', 'David Schwimmer', 'David Spade', 'Viola Davis', 'Common', 'Diane Lane', 'Diane Kruger', 'Diane Keaton', 'Martin Lawrence', 'Martin Sheen', 'Martin Starr', 'Charlie Sheen', 'Charlie Hunnam', 'Charlie Day', 'Charlie Cox', 'Tiffany Haddish', 'Joe Pantoliano', 'Joe Manganiello', 'Eric Dane', 'Eric Bana', 'Jackie Chan', 'Arnold Schwarzenegger', 'Alexander Skarsgard', 'Jason Alexander', 'Jason Bateman', 'Jason Biggs', 'Jason Lee', 'Halle Berry', 'Daktoa Fanning', 'Dakota Johnson', 'Natasha Lyonne', 'Natasha Henstridge', 'Laura Prepon', 'Tobey Maguire', 'Michael Cera', 'Michael B. Jordan', 'Donald Faison', 'Donald Glover', 'Donald Sutherland', 'John C. McGinley', 'John C. Reilly', 'John Cusack', 'John Goodman', 'John Krasinski', 'John Leguizamo', 'Sarah Chalke', 'Sarah Jessica Parker', 'Sarah Paulson', 'Sarah Silverman', 'Elizabeth Banks', 'Elizabeth Olsen', 'Elizabeth Shue', 'Eliza Dushku', 'Elizabeth Berkley', 'Jesse Bradford', 'Gabrielle Union', 'Kirsten Dunst', 'Shannon Doherty', 'Molly Shannon', 'Molly Ringwald', 'Matthew Broderick', 'Alan Ruck', 'Alan Arkin', 'Alan Alda', 'Alan Rickman', 'Alan Tudyk', 'Jeffrey Jones', 'Mia Sara', 'Ben Stein', 'Cedric The Entertainer', 'Eddie Griffin', 'Christine Taylor', 'Christina Applegate', 'Christina Ricci', 'Christina Hendricks', 'Kyla Pratt', 'Raven Symone', 'Orlando Brown', 'Anneliese van der Pol', 'Kyle Massey', 'Andy Richter', 'Andy Samberg', 'Andy Serkis', 'Andy Garcia', 'James Avery', 'James Earl Jones', 'Tupac Shakur', 'Snoop Dogg', 'Ice Cube', 'Ice-T', 'Queen Latifah', 'LL Cool J', 'Jada Pinkett Smith', 'Helen Hunt', 'Helen Mirren', 'Cary Elwes', 'Philip Seymour Hoffman', 'Josh Hutcherson', 'Liam Hemsworth', 'Woody Harrelson', 'Jeffrey Wright', 'Stanley Tucci', 'Wes Bentley', 'Toby Jones', 'Elden Henson', 'Brian Cox', 'Kieran Culkin', 'Amanda Seyfried', 'McCullay Culkin', 'Anna Paquin', 'Patrick Stewart', 'Ian McKellen', 'Famke Janssen', 'James Marsden', 'Rebecca Romijn', 'Hugh Jackman', 'Alan Cumming', 'Kelly Hu', 'Shawn Ashmore', 'Sean Astin', 'Sean Penn', 'Sean Hayes', 'Elijah Wood', 'Viggo Mortensen', 'Orlando Bloom', 'Mark-Paul Gosselaar', 'Breckin Meyer', 'Malcolm McDowell', 'Ethan Suplee', 'Kumail Nanjiani', 'Heather Locklear', 'Lindsay Lohan', 'Jamie Lee Curtis', 'Chad Michael Murray', 'Hilary Duff', 'Darrell Hammond', 'Tracy Morgan', 'Nicky Whelan', 'Josh Gad', 'Jorge Garcia', 'Whitney Cummings', 'Kate Upton', 'Kayley Cuoco', 'Affion Crockett', 'Olivia Taylor Dudley', 'David Hasselhoff', 'Sofia Carson', 'Sabrina Carpenter', 'Jennifer Love Hewitt', 'Sarah Michelle Gellar', 'Freddie Prinze Jr.', 'Matthew Lillard', 'Linda Cardellini', 'Seth Green', 'Seth MacFarlane', 'Seth Rogen', 'Simon Pegg', 'Nick Frost', 'Mary Elizabeth Winstead', 'Mary Steenburgen', 'Mary-Louise Parker', 'Mary-Kate Olsen', 'Ashley Olsen', 'Aubrey Plaza', 'Anna Kendrick', 'Jason Schwartzman', 'Mickey Rourke', 'Brie Larson', 'Maggie Gyllenhaal', 'Maggie Q', 'Alison Brie', 'Marc Maron', 'Betty Gilpin', 'Christopher Loweell', 'Scoot McNairy', 'Mackenzie Davis', 'Cooper Andrews', 'Lee Pace', 'Mark Strong', 'Adam Brody', 'Jillian Bell', 'Jet Li', 'Olivia Thirlby', 'Olivia Holt', 'T.J. Miller', 'Kate McKinnon', 'Kate Mara', 'Kate Bosworth', 'Rob Corddry', 'Thomas Haden Church', 'Thomas Middleditch', 'Thomas Jane', 'Vanessa Bayer', 'Vanessa Hudgens', 'Vanessa Kirby', 'Vanessa Williams', 'Randall Park', 'Da\'Vine Joy Randolph', 'Sam Richardson', 'Sam Rockwell', 'Sam Worthington', 'Sam Neill', 'Sam Elliott', 'Karan Soni', 'Abbey Lee', 'Nicholas Hoult', 'Joel Edgerton', 'Ciaran Hinds', 'Charlotte Rampling', 'Kurt Russell', 'Kurtwood Smith', 'Michael C. Hall', 'Michael Shannon', 'Jennifer Carpenter', 'James Remar', 'David Zayas', 'Desmond Harrington', 'C.S. Lee', 'Yvonne Strahovski', 'Keegan-Michael Key', 'Sterling K. Brown', 'Trevante Rhodes', 'Method Man', 'Kate Micucci', 'Kate Walsh', 'Kate Winslet', 'Kate Hudson', 'Ken Jeong', 'Justin Long', 'Justin Timberlake', 'Tony Shalhoub', 'Tony Hale', 'Sigourney Weaver', 'Tim Robbins', 'Tim Roth', 'Tim Curry', 'Tim Blake Nelson', 'Tim Heidecker', 'Enrico Colantoni', 'Jon Heder', 'Jonah Hill', 'Jon Favreau', 'Jed Ress', 'Sam Lloyd', 'Neil Patrick Harris', 'Jason Segel', 'Alyson Hannigan', 'Cobie Smulders', 'Josh Radnor', 'Bob Saget', 'Jerry Seinfeld', 'Julia Louis-Dreyfus', 'Michael Richards', 'Wayne Knight', 'Liam Neeson', 'Ralph Fiennes', 'Alan Rickman', 'Colin Firth', 'Emma Thompson', 'Hugh Grant', 'Keira Knightley', 'Bill Nighy', 'Laura Linney', 'Martin Freeman', 'Rowan Atkinson', 'David Tennant', 'Billie Piper', 'Catherine Tate', 'Freema Agyeman', 'Karen Gillan', 'Andrew Lincoln', 'Norman Reedus', 'Lauren Cohan', 'Danai Gurira', 'Jeffrey Dean Morgan', 'Orlando Bloom', 'Geoffrey Rush', 'Jack Davenport', 'Chiwetel Ejiofor', 'Michael Fassbender', 'Lupita Nyong\'o', 'Letitia Wright', 'Sienna Miller', 'Michelle Rodriguez', 'Giovanni Ribisi', 'Jamie Dornan', 'Helana Bonham Carter', 'Bryce Dallas Howard', 'Jeff Goldblum', 'Anton Yelchin', 'Karl Urban', 'Zachary Quinto', 'Mike Epps', 'Adam Scott', 'Emma Roberts', 'Lea Michele', 'Abigail Breslin', 'Keke Palmer', 'Rooney Mara', 'Andrew Garfield', 'Jesse Eisenberg', 'Armie Hammer', 'Ron Livingston', 'Jonathon Taylor Thomas', 'Joseph Gordon-Levitt', 'Tommy Lee Jones', 'Tommy Lee', 'Tommy Chong', 'Tommy Davidson', 'Connie Nielsen', 'Forrest Whitaker', 'Stephen Curry', 'Robin Williams', 'Dylan McDermit', 'Emma Stone', 'Gary Cole', 'Kevin Costner', 'Kevin Bacon', 'Kevin Hart', 'Kevin Pollak', 'Kevin Kline', 'Kevin Dillon', 'Kevin Connolly', 'Jamie Pressly', 'Jamie Kennedy', 'Paul Walker', 'Paul Rudd', 'Paul Giamatti', 'Paul Bettany', 'Paul Dano', 'Mino Servino', 'Milo Ventimiglia', 'Mindy Kaling', 'Teri Hatcher', 'Milana Vayntrub', 'Danny Trejo', 'Danny Glover', 'Jean Reno', 'Jean-Claude Van Damme', 'Nathalie Emmanuel', 'Natalie Portman', 'Natalie Dormer', 'John Travolta', 'John Turturro', 'Ben Schwartz', 'Ben Stiller', 'Ben Kingsley', 'Rob Lowe', 'Mary Lynn Rajskub', 'Keith David', 'Ralph Macchio', 'Taron Egerton', 'Rosario Dawson', 'LaKeith Stanfield', 'Danny DeVito', 'Terrence Howard', 'Tom Hiddleston', 'Ke Huy Quan', 'Tara Reid', 'Jonathan Majors', 'Philip Fornah', 'Jurnee Smollett', 'Ewan McGregor', 'Regina Hall', 'Regina King', 'Janeline Hayes', 'Marlon Waynes', 'Bernie Mac', 'Omar Epps', 'Harold Perrineau', 'M Emmet Walsh', 'Paul Sorvino', 'Craig T. Nelson', 'Craig Robinson', 'Jay Chandrasekhar', 'Kevin Heffernan', 'Paul Soter', 'Steve Lemme', 'Seann William Scott', 'Eugene Levy', 'Jim Carrey', 'Jeff Daniels', 'Lauren Holly', 'Mike Myers', 'Dana Carvey', 'Heather Graham', 'Verne Troyer', 'David Koechner', 'Fred Willard', 'Chris Parnell', 'Clark Duke', 'Denise Richards', 'Neve Campbell', 'Rose McGowan', 'Skeet Ulrich', 'Dina Meyer', 'Jake Busey', 'Burt Reynolds', 'Jon Voight', 'Jon Bernthal', 'Dave Chappelle', 'Billy Dee Williams', 'Billy Zane', 'Steve Buscemi', 'Brendan Fraser', 'Rachel Weisz', 'Chris Farley', 'David Spade', 'Ernie Hudson', 'Judd Nelson', 'Laurence Fishburne', 'Carrie-Anne Moss', 'Ruby Rose', 'Gina Gershon', 'Bridget Moynahan', 'Ian McShane', 'Lance Reddick', 'Uma Thurman', 'Lucy Liu', 'Vivica A. Fox', 'Daryl Hannah', 'Michael Madsen', 'David Carradine', 'Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson', 'Thomas F. Wilson', 'Crispin Glover', 'James Tolkan', 'Rami Malek', 'Christian Slater', 'Portia Doubleday', 'Brooke Shields', 'Phil Harman', 'Sinbad', 'Arnold Schwarzenegger', 'Brittany Snow', 'Rebel Wilson', 'Anna Camp', 'David Oyelowo', 'Kristen Stewart', 'Robert Pattinson', 'Billy Burke', 'Taylor Lautner', 'Ashley Greene', 'Lucy Lawless', 'Bruce Campbell', 'Ray Santiago', 'Damon Wayans Jr.', 'Nina Dobrev', 'Jordana Brewster', 'Tyrese Gibson', 'Sung Kang', 'Gal Gadot', 'Maya Rudolph', 'Tina Fey', 'Melissa McCarthy', 'Leslie Jones', 'Andy Garcia', 'Mandy Moore', 'Daisy Ridley', 'Oscar Isaac', 'Adam Driver', 'Adrian Brody', 'John Boyega', 'Mark Hamill', 'Carrie Fisher', 'Keri Russel', 'Luis Guzman', 'Kathryn Hahn', 'Jack McBrayer', 'Julie Gonzalo', 'Meagan Good', 'William Fichtner', 'Ving Rhames', 'Jeremy Renner', 'Steve Coogan', 'Michael Caine', 'Anthony Anderson', 'Eve', 'Sean Patrick Thomas', 'Clive Owen', 'Julia Stiles', 'Christopher Walken', 'Catherine Zeta-Jones', 'Walton Goggins', 'Ato Essandoh', 'Don Cheadle', 'Jon Favreau', 'Gwyneth Paltrow', 'Scarlett Johansson', 'Awkwafina', 'Simu Liu', 'Richard Gere', 'Dennis Quaid', 'Liev Schreiber', 'Stephen Merchant', 'Will Sasso', 'Greg Kinnear', 'Thandiwe Newton', 'Edward Norton', 'Naomi Watts', 'Matt Dillon', 'Loretta Devine', 'Michael Pena', 'Ryan Phillippe', 'Wesley Snipes', 'Rosie Perez', 'Tyra Ferrell', 'Kathy Bates', 'John Hawkes', 'Cuba Gooding Jr.', 'Angela Bassett', 'Clifton Powell', 'Tia Carrere', 'Tom Arnold', 'David Alan Grier', 'Nia Long', 'Faizon Love', 'Tony Cox', 'Reese Witherspoon', 'John Witherspoon', 'Paula Jai Parker', 'DJ Qualls', 'Issac Hayes', 'Ludacris', 'Taryn Manning', 'Brittany Murphy', 'Mekhi Phifer', 'Michelle Phifer', 'Eminem', 'Kim Basinger', 'Eva Mendes', 'Ryan Gosling', 'Steve Carell', 'Dave Foley', 'Melissa Rauch', 'John Larroquette', 'Ryan Hansen', 'Kurt Fuller', 'Rose Byrne', 'Amanda Bynes', 'Aziz Ansari', 'Nick Kroll', 'Megan Mullally', 'Nick Offerman', 'Jay Baruchel', 'Danny McBride', 'Robin Wright', 'Jack McGee', 'Jenny Slate', 'Octavia Spencer', 'Bonnie Hunt', 'Michael Clarke Duncan', 'David Morse', 'James Cromwell', 'Angelina Jolie', 'Vinnie Jones', 'Chi McBride', 'Gene Hackman', 'Rebecca Romijn', 'Kelly Hu', 'William Shaner', 'Treat Williams', 'Diedrich Bader', 'Heather Burns', 'Meg Ryan', 'Parker Posey', 'Steve Zahn', 'A.J. Cook', 'Jason London', 'Harland Williams', 'Jim Breuer', 'Tom Green', 'Eddie Griffin' ];

  // State to track if the game has started
  const [gameStarted, setGameStarted] = useState(false);
  const [guessCount, setGuessCount] = useState(0); // Track the number of guesses
  const [timer, setTimer] = useState("00:10:00");
  const [remainingTime, setRemainingTime] = useState(600000); // 10 minutes in milliseconds
  const [timeUp, setTimeUp] = useState(false); // track if timer === 0
  const [isPaused, setIsPaused] = useState(false);
  const [actor1Credits, setActor1Credits] = useState([]);
  const [actor2Credits, setActor2Credits] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [validity, setValidity] = useState({});
  const [winner, setWinner] = useState(false);
  const [connections, setConnections] = useState([]);
  const [allConnections, setAllConnections] = useState([]);

  const [answers, setAnswers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  });

  // API for getting Actor Data
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchActorData = async (actorName) => {
    try {
      // const response = await axios.get(`http://localhost:5000/api/search/${actorName}`);
      const response = await axios.get(`https://www.johnboyes.dev:5000/api/search/${actorName}`);
      return { name: actorName, data: response.data };
    } catch (error) {
      console.error(`Error fetching data for ${actorName}:`, error);
      return { name: actorName, data: null, error: true };
    }
  };
  
  const handleFetchData = async () => {
    setLoading(true);
    setResults([]); // Clear previous results
  
    try {
      let actor1, actor2;
      let selectedActors = [];
      let credits1, credits2;
      let titles1 = [];
      let titles2 = [];
      let attempts = 0;
      let maxAttempts = 100; // Maximum retry attempts to avoid infinite loop
  
      let actorsSelected = false; // Flag to indicate whether valid actors are selected
  
      while (!actorsSelected && attempts < maxAttempts) {
        // Randomly shuffle the actor list and select two actors
        const shuffledList = [...actorList].sort(() => 0.5 - Math.random());
        actor1 = shuffledList[0];
        actor2 = shuffledList[1];
  
        console.log("Selected Actors:", actor1, actor2);
  
        if (!actor1 || !actor2) {
          console.error("Actor selection failed, actor1 or actor2 is undefined:", actor1, actor2);
          return;
        }
  
        // Fetch data for both actors
        try {
          const [actor1Response, actor2Response] = await Promise.all([
            fetchActorData(actor1),
            fetchActorData(actor2)
          ]);
  
          console.log("Actor 1 Response:", actor1Response.data);
          console.log("Actor 2 Response:", actor2Response.data);
  
          // Check if the data exists for both actors
          if (!actor1Response.data || !actor2Response.data) {
            console.error("API response is missing for one or both actors.");
            return;
          }
  
          credits1 = actor1Response.data.acting_credits || [];
          credits2 = actor2Response.data.acting_credits || [];

          // Set the credits into state for future validation
          setActor1Credits(credits1);
          setActor2Credits(credits2);
  
          if (!credits1 || !credits2) {
            console.error("Actor credits not found for", actor1, actor2);
            return;
          }
  
          // Extract movie titles from credits
          titles1 = credits1.map((movie) => movie.title.toLowerCase());
          titles2 = credits2.map((movie) => movie.title.toLowerCase());
  
          console.log("Actor 1 Titles:", titles1);
          console.log("Actor 2 Titles:", titles2);
  
          // Check if there are overlapping movies
          let overlapMovies = titles1.filter((title) => titles2.includes(title));
  
          if (overlapMovies.length > 0) {
            console.log(`Overlap found between ${actor1} and ${actor2}:`, overlapMovies);
            attempts++; // Increment attempts if overlap is found
            console.log("Overlap found. Retrying...");
          } else {
            // If no overlap, select the actors and exit the loop
            const actor1Data = actor1Response.data || {};
            const actor2Data = actor2Response.data || {};
  
            // Get the image URL if it exists, or use a default value
            const actor1ImageUrl = actor1Data.image_url || 'default_image_url';
            const actor2ImageUrl = actor2Data.image_url || 'default_image_url';
  
            // Add the actors to the respective degree arrays
            selectedActors.push({ name: actor1, credits: credits1, imageUrl: actor1ImageUrl });
            selectedActors.push({ name: actor2, credits: credits2, imageUrl: actor2ImageUrl });
  
            actorsSelected = true; // Set actors as selected
          }
        } catch (error) {
          console.error("Error during actor data fetching:", error);
          return;
        }
      }
  
      // Set results into state to map to components
      setResults(selectedActors); // For example, setting selected actors to the results
  
      setLoading(false); // End loading
    } catch (error) {
      console.error("Error in fetching actor data:", error);
      setLoading(false); // End loading if an error occurs
    }
  };
  
  
  // Timer Related
  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);
    return `${hours > 9 ? hours : "0" + hours}:${
      minutes > 9 ? minutes : "0" + minutes
    }:${seconds > 9 ? seconds : "0" + seconds}`;
  };
  
  useEffect(() => {
    setTimer(formatTime(remainingTime));
  }, [remainingTime]);
  

  useEffect(() => {
    if (gameStarted && remainingTime > 0 && !gameOver) {
      const timerInterval = setInterval(() => {
        setRemainingTime((prev) => prev - 1000);
      }, 1000);
  
      return () => clearInterval(timerInterval);
    }
  
    if (remainingTime <= 0 && !gameOver) {
      setGameOver(true);
      setTimeUp(true);
    }
  }, [gameStarted, remainingTime, gameOver]);

  // Use Effect Debugging
  // useEffect(() => {
  //   if (gameStarted && remainingTime > 0 && !gameOver) {
  //     console.log("Setting new interval"); // Debug log
  //     const timerInterval = setInterval(() => {
  //       setRemainingTime((prev) => Math.max(0, prev - 1000));
  //     }, 1000);
  
  //     return () => {
  //       console.log("Clearing interval"); // Debug log
  //       clearInterval(timerInterval);
  //     };
  //   }
  // }, [gameStarted, remainingTime, gameOver]);
  

  const getTimeRemaining = (time) => {
    const total = time;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return { total, hours, minutes, seconds };
  };


  const onClickReset = () => {
    setIsPaused(false);
    setRemainingTime(600000); // Reset to 10 minutes
    // setRemainingTime(10000)
    setTimer(formatTime(remainingTime));
  };

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value
    }));
  };

  // Validation during checkAnswers function
   // Does not work on first degree. Works on subsequent degrees
  const checkAnswers = async () => {
    if (gameOver) return;
  
    let currentValidity = {};
    let previousMovies = [];
    let connectedActor = null;
    let finalActor = null;
  
    const connections = []; // Array to store all connections
    const newConnections = [...connections];
    const actor1Name = results[0].name; // e.g., Johnny Depp
    const actor2Name = results[1].name; // e.g., John Hamm
  
    try {
      for (const degree of Object.keys(answers)) {
        const actorName = answers[degree];
        if (!actorName) break;
  
        // const response = await axios.get(`http://localhost:5000/api/search/${actorName}`);
        const response = await axios.get(`https://www.johnboyes.dev:5000/api/search/${actorName}`);
        const actorMovies = response.data.acting_credits || [];
        const actorMovieTitles = actorMovies.map((movie) => movie.title.toLowerCase());
        const actor1MovieTitles = actor1Credits.map((movie) => movie.title.toLowerCase());
        const actor2MovieTitles = actor2Credits.map((movie) => movie.title.toLowerCase());
        const previousMovieTitles = previousMovies.map((movie) => movie.title.toLowerCase());
  
        const matchesWithActor1 = actorMovieTitles.filter((title) => actor1MovieTitles.includes(title));
        const matchesWithActor2 = actorMovieTitles.filter((title) => actor2MovieTitles.includes(title));
        const matchesWithPrevious = actorMovieTitles.filter((title) => previousMovieTitles.includes(title));


        if (degree === "first") {
          // Immediate win condition: actor connects both Actor1 and Actor2
          if (matchesWithActor1.length > 0 && matchesWithActor2.length > 0) {
            connections.push({
              actor1: actor1Name,
              actor2: actorName,
              movies: matchesWithActor1,
            });
            connections.push({
              actor1: actorName,
              actor2: actor2Name,
              movies: matchesWithActor2,
            });
  
            // setConnections(newConnections);
            console.log("Game ends immediately with connection:", connections);
            setWinner(true);
            setGameOver(true);
            return;
          }
  
          // Establish the FirstConnection
          if (matchesWithActor1.length > 0) {
            connectedActor = actor1Name; // Johnny Depp
            finalActor = actor2Name; // John Hamm
            previousMovies = actorMovies;
  
            connections.push({
              actor1: actor1Name,
              actor2: actorName,
              movies: matchesWithActor1,
            });
            
            setAllConnections(connections);
            console.log(connections);
            console.log("First connection added:", connections[connections.length - 1]);
            currentValidity[degree] = true;
          } else {
            currentValidity[degree] = false;
            break;
          }
        } else {
          // For subsequent degrees
          if (matchesWithPrevious.length > 0) {
            connections.push({
              actor1: connections[connections.length - 1].actor2,
              actor2: actorName,
              movies: matchesWithPrevious,
            });
  
            setAllConnections(connections);
            console.log("New connection added:", connections[connections.length - 1]);
            console.log(connections);
  
            // Check if this actor connects to the FinalActor
            if (matchesWithActor2.length > 0) {
              connections.push({
                actor1: actorName,
                actor2: finalActor,
                movies: matchesWithActor2,
              });
  
              console.log("Final connection added:", connections[connections.length - 1]);
              console.log("All connections:", connections);
              setAllConnections(connections);
              setWinner(true);
              setGameOver(true);
              return;
            }
  
            previousMovies = actorMovies;
            currentValidity[degree] = true;
          } else {
            currentValidity[degree] = false;
            break;
          }
        }
      }
  
      setGuessCount((prev) => {
        const nextCount = prev + 1;
        if (nextCount >= 10) setGameOver(true);
        return nextCount;
      });
  
      setValidity(currentValidity);
    } catch (error) {
      console.error("Error during validation:", error);
    }
  };

  //
  //
  //
  // Works to connect each degree, does not work to connect current degree to non-connected actor
  // const checkAnswers = async () => {
  //   if (gameOver) return;
  
  //   let currentValidity = {};
  //   let previousMovies = [];
  //   let connectedActor = null;
  //   let isGameOver = false;
  
  //   try {
  //     for (const degree of Object.keys(answers)) {
  //       const actorName = answers[degree];
  //       if (!actorName) break;
  
  //       const response = await axios.get(`https://www.johnboyes.dev:5000/api/search/${actorName}`);
  //       const actorMovies = response.data.acting_credits || [];
  
  //       // Extract only movie titles for validation
  //       const actorMovieTitles = actorMovies.map((movie) => movie.title);
  //       const actor1MovieTitles = actor1Credits.map((movie) => movie.title);
  //       const actor2MovieTitles = actor2Credits.map((movie) => movie.title);
  //       const previousMovieTitles = previousMovies.map((movie) => movie.title);
  
  //       console.log("Actor Movies:", actorMovies);
  //       console.log("Actor1 Movie Titles:", actor1MovieTitles);
  //       console.log("Actor2 Movie Titles:", actor2MovieTitles);
  //       console.log("Previous Movie Titles:", previousMovieTitles);
  
  //       // Validate against actor1Credits and actor2Credits
  //       if (degree === "first" || degree === "second") {
  //         const matchesActor1 = actorMovieTitles.some((title) => actor1MovieTitles.includes(title));
  //         const matchesActor2 = actorMovieTitles.some((title) => actor2MovieTitles.includes(title));
  
  //         if (matchesActor1 && matchesActor2) {
  //           // Successfully connected both actors
  //           currentValidity[degree] = true;
  //           setGameOver(true);
  //           setWinner(true);
  //           return;
  //         }
  
  //         if (matchesActor1 || matchesActor2) {
  //           currentValidity[degree] = true;
  //           connectedActor = matchesActor1 ? "actor2" : "actor1";
  //           previousMovies = actorMovies;
  //         } else {
  //           currentValidity[degree] = false;
  //           break;
  //         }
  //       } else {
  //         // If the first degree matches actor1
  //         if (connectedActor === "actor1") {
  //           // Check if the next degree matches actor2 and the last degree
  //           const matchesActor2 = actorMovieTitles.some((title) => actor2MovieTitles.includes(title));
  //           const matchesLastDegree = actorMovieTitles.some((title) => previousMovieTitles.includes(title));
  
  //           if (matchesActor2 && matchesLastDegree) {
  //             currentValidity[degree] = true;
  //             setGameOver(true);
  //             setWinner(true);
  //             return;
  //           }
  //         }
  
  //         // If the first degree matches actor2
  //         if (connectedActor === "actor2") {
  //           // Check if the next degree matches actor1 and the previous degree
  //           const matchesActor1 = actorMovieTitles.some((title) => actor1MovieTitles.includes(title));
  //           const matchesPreviousDegree = actorMovieTitles.some((title) => previousMovieTitles.includes(title));
  
  //           if (matchesActor1 && matchesPreviousDegree) {
  //             currentValidity[degree] = true;
  //             setGameOver(true);
  //             setWinner(true);
  //             return;
  //           }
  //         }
  
  //         // Continue validating against previous degree's movies
  //         const matchesPrevious = actorMovieTitles.some((title) => previousMovieTitles.includes(title));
  //         const matchesRemainingActor = actorMovieTitles.some((title) =>
  //           connectedActor === "actor1" ? actor1MovieTitles.includes(title) : actor2MovieTitles.includes(title)
  //         );
  
  //         if (!matchesPrevious) {
  //           currentValidity[degree] = false;
  //           isGameOver = true;
  //           break;
  //         }
  
  //         if (matchesRemainingActor) {
  //           currentValidity[degree] = true;
  //           setGameOver(true);
  //           setWinner(true);
  //           return;
  //         }
  
  //         currentValidity[degree] = true;
  //         previousMovies = actorMovies;
  //       }
  //     }
  
  //     // Update guess count and game state
  //     setGuessCount((prevGuessCount) => {
  //       const nextGuessCount = prevGuessCount + 1;
  //       if (nextGuessCount >= 10) {
  //         setGameOver(true);
  //         setWinner(false);
  //       }
  //       return nextGuessCount;
  //     });
  
  //     setValidity(currentValidity);
  //     if (isGameOver) setGameOver(true);
  //   } catch (error) {
  //     console.error("Error validating answers:", error);
  //   }
  // };

  const resetGame = () => {
    setConnections([]);
    setGuessCount(0);
    setGameOver(false);
    setWinner(false);
    setTimeUp(false);
    setAnswers({
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: ""
    });
    setValidity({
      first: undefined,
      second: undefined,
      third: undefined,
      fourth: undefined,
      fifth: undefined
    });

    onClickReset();
    handleFetchData();
    setGameStarted(true);
  };


    // Main Game Screen
  const gameForm = (
    <div className="w-full my-6 shadow-sm shadow-gray-600 dark:shadow-gray-900 rounded-xl p-8 pt-6 pb-8 mb-4
    bg-gradient-to-b from-slate-300 to-slate-300/80 border border-black
    dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-700/80">

      <form className="w-full mx-auto max-w-xl">
        {[
          ["first", "second"],
          ["third", "fourth"],
          ["fifth"],
        ].map((pair, rowIndex) => (
          <div className="flex flex-wrap -mx-3 mb-6" key={`row-${rowIndex}`}>
            {pair.map((degree) => (
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" key={degree}>
                <label
                  className="tracking-wide block text-sm font-bold mb-2"
                  htmlFor={degree}
                >
                  {degree.charAt(0).toUpperCase() + degree.slice(1)} Degree
                  {validity[degree] !== undefined && (
                    validity[degree] ? (
                      <span style={{ color: "green" }}>&#x2713;</span> // Green check mark
                    ) : (
                      <span style={{ color: "red" }}>&#x2717;</span> // Red X mark
                    )
                  )}
                </label>
                <input
                  className="shadow appearance-none block border rounded w-full py-2 px-3 
                    leading-tight dark:bg-gray-200 dark:text-black
                    focus:outline-none focus:shadow-outline"
                  id={degree}
                  type="text"
                  placeholder="Search Actor"
                  value={answers[degree]}
                  onChange={handleChange}
                  disabled={gameOver} // Disable inputs if the game is over
                />
              </div>
            ))}
          </div>
        ))}

        {/* Show the timer and controls */}
        <div className="sm:text-lg font-bold tracking-wide mb-4">
          {!gameOver ? (
            <div className="flex flex-col sm:flex-row w-full">
              <div className="flex flex-col pb-4 sm:pb-0">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 mx-auto
                      text-white font-bold py-2 px-4 rounded 
                      focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={checkAnswers}
                  >
                    Check Answers
                  </button>
                  <span className="text-xs italic text-center">You can check your answers at any time</span>
              </div>
              <div className="flex flex-col mx-auto items-center sm:items-end sm:justify-between sm:w-1/2 ">
                <span className="text-lg font-bold">Timer: {timer}s</span>
                <span className="text-xs font-bold">Guesses: {guessCount}/10</span>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className={`text-2xl font-bold ${winner ? "text-green-500" : "text-red-500"}`}>
                {winner ? "You Win!" : "Game Over: You Lose!"}
              </h2>
            </div>
          )}
        </div>
      </form>
    </div>
  );

  // Handle start game
  const startGame = () => {
    setConnections([]);
    setGameOver(false);
    setTimeUp(false);
    setWinner(false);
    setTimer(0);
    setGuessCount(0);
    setGameStarted(true); // Hide description and show the form
    resetGame();
  };

  // Game description
  const gameDescription = (
    <div className="w-full max-w-xl my-6 mx-auto shadow-sm shadow-gray-600 dark:shadow-gray-900 rounded-xl p-8 pt-6 pb-8 mb-4
        bg-gradient-to-b from-slate-300 to-slate-300/80 border border-black
        dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-700/80">
      <span className='text-lg font-bold tracking-wide'>Game Description</span>
      <p className='p-2'>
        <ol>
          <li className="py-1">
            Welcome to the game! Your task is to connect two actors through a series of movie co-stars. 
          </li>
          <li className="py-1">
            The goal is to connect the actors in under six degrees of separation. The first degree must be an actor who was on screen
            with Actor 1, and if they were on screen with both actors you win the game. 
          </li>
          <li className="py-1">
            Each subsequent degree you use must connect to the previous degree, and the game ends when a connection is also made to the actor 2.
          </li>
          <li className="py-2">
            <strong>Example:</strong><br></br>
             Actor 1 &gt; First Degree &gt; Actor 2
          </li>
          <li className="py-2">
            <strong>Example:</strong><br></br> 
            Actor 1 &gt; First Degree &gt; Second Degree &gt; Actor 2
          </li>
        </ol>
      </p>
      <button 
        onClick={startGame} 
        className="my-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Game
      </button>
    </div>
    );

    
  // End Game Screen
  const endGame = (
    <div className="w-full max-w-xl my-6 mx-auto shadow-sm shadow-gray-600 dark:shadow-gray-900 rounded-xl p-8 pt-6 pb-8 mb-4
        bg-gradient-to-b from-slate-300 to-slate-300/80 border border-black
        dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-700/80">
      <span className='text-xl font-bold tracking-wide'>
        {gameOver || timeUp ? "Game Over" : "You Won"}
      </span>
      <p className='p-2'>
        <ol>
          <li className="py-1">
            The game has ended! { winner ? "You Won!" : "You didn't make the connections. Try Again!"}
          </li>
          <li className="py-1">
            Time Remaining: { timer  }
          </li>
          <li className="py-1">
            Guesses: { guessCount } / 10
          </li>
        </ol>
      </p>
      <div className="connections p-2">

      <span className="font-bold">Connections Made:</span>
      
      {allConnections.map((connection, index) => (
        <div key={index} className="connection p-1">
          <strong>Connection {index + 1}</strong> - {connection.actor1} - {connection.actor2}
          <ul className="list-disc pl-6">
            {connection.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}

      </div>
      <div className="text-center pb-6">
        <span className="text-xl text-center font-bold">Thanks for playing!</span>
      </div>
      <button 
        onClick={startGame} 
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Restart Game
      </button>
    </div>
    );

  const chosenOnes = (
    <div className="flex flex-col overflow-auto">
      <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col sm:flex-row justify-center gap-12 overflow-hidden">
        {results.map((actor, index) => (
          <div key={index} className="rounded-xl border border-black md:max-w-xs xl:max-w-md
            bg-gradient-to-b from-slate-300 to-slate-300/80 
            dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
            shadow-sm shadow-gray-600 dark:shadow-gray-900">
            
            <img 
              src={actor.imageUrl} 
              alt={actor.name} 
              title="Show Details" 
              className="w-96 object-cover cursor-pointer rounded-t-xl md:max-h-80"
            />
            
            <div className="w-full p-4 rounded-b-xl">
              <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
                {actor.name}
              </h3>
              
              {/* Display error message if actor data fetch failed */}
              {actor.error ? (
                <p style={{ color: 'red' }}>Error fetching data</p>
              ) : (
                <div className="rounded-xl border border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
                  <div className="">
                    <button
                      onClick={(e) => {
                        const creditsDiv = e.target.nextElementSibling;
                        creditsDiv.style.display =
                          creditsDiv.style.display === 'none' ? 'block' : 'none';
                      }}
                      className="p-2"
                    >
                      Show Acting Credits - {actor.credits.length}
                    </button>
                    
                    <div style={{ display: 'none' }}>
                      <ul className="p-2 text-sm">
                        {actor.credits.map((credit, idx) => (
                          <li key={idx} className="pt-1 px-2">
                            ({credit.release_date}) <strong>{credit.title}</strong>  - {credit.character}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className='pt-2' onClick={resetGame} disabled={loading}>Click to Load New Actors</button>
    </div>
    </div>
  )

  return (
    <div className="flex flex-col p-6 mx-auto overflow-auto">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl font-bold tracking-wide mb-6">
          Six Degrees of Separation Game
        </p>
      </div>
      <div className="w-full mx-auto">

        {/* Show Game Description */}
          {!gameStarted ? gameDescription : null }

        {/* Display Actors to Solve */}
          { gameStarted ? chosenOnes : null}
          { gameStarted && !gameOver ? gameForm : null }
          
        {/* Show Game Over */}
          { !gameOver ? null : endGame }

      </div>
    </div>
  );
}