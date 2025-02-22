import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import 'App.css'

function App() {

  const monuments = [
    {
      id: 1,
      name: "Eiffel Tower",
      location: "Paris, France",
      year: 1889,
      height: "330m",
      architect: "Gustave Eiffel",
      visitorsPerYear: "7 million",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"
    },
    {
      id: 2,
      name: "Great Wall of China",
      location: "China",
      year: "7th Century BC",
      height: "6-14m",
      architect: "Multiple Dynasties",
      visitorsPerYear: "10 million",
      image: "https://www.tripsavvy.com/thmb/UC__1dv9YAGw3uaDiAj7gK5MKu8=/5000x3253/filters:fill(auto,1)/great-wall-of-china-5bf5a5e1c9e77c00586cd430.jpg"
    },
    {
      id: 3,
      name: "Taj Mahal",
      location: "Agra, India",
      year: 1648,
      height: "73m",
      architect: "Ustad Ahmad Lahori",
      visitorsPerYear: "8 million",
      image: "https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_4x3.jpg"
    },
    {
      id: 4,
      name: "Statue of Liberty",
      location: "New York, USA",
      year: 1886,
      height: "93m",
      architect: "Frédéric Auguste Bartholdi",
      visitorsPerYear: "4.5 million",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg"
    },
    {
      id: 5,
      name: "Colosseum",
      location: "Rome, Italy",
      year: 80,
      height: "48m",
      architect: "Vespasian & Titus",
      visitorsPerYear: "6 million",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg"
    },
    {
      id: 6,
      name: "Machu Picchu",
      location: "Peru",
      year: 1450,
      height: "2,430m above sea level",
      architect: "Incan Empire",
      visitorsPerYear: "1.5 million",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Machu_Picchu_Peru.JPG"
    },
    {
      id: 7,
      name: "Pyramids of Giza",
      location: "Egypt",
      year: "2580–2560 BC",
      height: "146m (originally)",
      architect: "Ancient Egyptians",
      visitorsPerYear: "14 million",
      image: "https://tse4.mm.bing.net/th?id=OIP.qa3Wfem8AKuNkz6Eq1kvVAHaH9&pid=Api&P=0&h=180"
    },
    {
      id: 8,
      name: "Big Ben",
      location: "London, UK",
      year: 1859,
      height: "96m",
      architect: "Augustus Pugin",
      visitorsPerYear: "Not Open for Visitors",
      image: "https://tse4.mm.bing.net/th?id=OIP.-brVk5pZ6CVK5MFVXB9t-QHaEK&pid=Api&P=0&h=180"
    }
  ];



  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>LOCATION</th>
              <th>YEAR</th>
              <th>HEIGHT</th>
              <th>ARCHITECT</th>
              <th>VISITORPERYEAR</th>
              <th>IMAGE</th>
            </tr>
          </thead>
          <tbody>

            {monuments.map((monument) => {
              return (
                <tr>
                  <td>{monument.id}</td>
                  <td>{monument.name}</td>
                  <td>{monument.location}</td>
                  <td>{monument.year}</td>
                  <td>{monument.height}</td>
                  <td>{monument.architect}</td>
                  <td>{monument.visitorsPerYear}</td>
                <td><img src={monument.image} style={{maxHeight:"10rem",width:"100%"}} alt="" /></td>
                </tr>
              );

            })
            }



          </tbody>
        </Table>
      </Container>

    </>
  )
}

export default App
