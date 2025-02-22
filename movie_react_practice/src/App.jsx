
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ListGroup, Col, Container, Row, Badge } from 'react-bootstrap'


function App() {

  return (
    <>
      <MovieCard />
    </>
  )
}


function MovieCard() {

  const movie_data = [
    {
      "status": "Now Showing",
      "title": "The Silent Witness",
      "description": "A gripping legal thriller where a mute girl becomes the sole witness to a high-profile murder, leading to a battle between truth and deception.",
      "cast": ["Manoj Bajpayee", "Taapsee Pannu"],
      "genres": ["Thriller", "Drama"],
      "image_url": "https://4kwallpapers.com/images/walls/thumbs/17917.jpg"
    },
    {
      "status": "Upcoming",
      "title": "Shadows of Deception",
      "description": "A secret agent goes rogue after uncovering a conspiracy within his own agency, setting off a deadly chase across continents.",
      "cast": ["Hrithik Roshan", "Radhika Apte"],
      "genres": ["Action", "Suspense"],
      "image_url": "https://4kwallpapers.com/images/walls/thumbs/17917.jpg"
    },
    {
      "status": "Now Showing",
      "title": "Whispering Woods",
      "description": "A group of hikers stumbles upon an abandoned village, only to realize they are not alone.",
      "cast": ["Rajkummar Rao", "Bhumi Pednekar"],
      "genres": ["Horror", "Mystery"],
      "image_url": "https://4kwallpapers.com/images/walls/thumbs/17917.jpg"
    },
    {
      "status": "Upcoming",
      "title": "Neon Mirage",
      "description": "A cyber-hacker is framed for a crime he didn’t commit and must uncover the real culprit before it’s too late.",
      "cast": ["Vicky Kaushal", "Mrunal Thakur"],
      "genres": ["Sci-Fi", "Thriller"],
      "image_url": "https://4kwallpapers.com/images/walls/thumbs/17917.jpg"
    },
    {
      "status": "Now Showing",
      "title": "The Last Call",
      "description": "A taxi driver’s last ride of the night turns into a fight for survival when his passenger is not who he seems.",
      "cast": ["Nawazuddin Siddiqui", "Yami Gautam"],
      "genres": ["Thriller", "Crime"],
      "image_url": "https://4kwallpapers.com/images/walls/thumbs/17917.jpg"
    },
    {
      "status": "Upcoming",
      "title": "Eclipsed Truth",
      "description": "A journalist uncovers a shocking political scandal but must survive long enough to reveal the truth.",
      "cast": ["Ayushmann Khurrana", "Tabu"],
      "genres": ["Political Thriller", "Drama"],
      "image_url": "https://4kwallpapers.com/images/walls/thumbs/17917.jpg"
    },
    {
      "status": "Now Showing",
      "title": "Echoes of the Past",
      "description": "A historian discovers a hidden secret in an ancient manuscript that could change history forever.",
      "cast": ["Pankaj Tripathi", "Rasika Dugal"],
      "genres": ["Mystery", "Adventure"],
      "image_url": "https://4kwallpapers.com/images/walls/thumbs/17917.jpg"
    },
    {
      "status": "Upcoming",
      "title": "Fractured Lives",
      "description": "A detective with a troubled past must solve a series of brutal murders before becoming the next victim.",
      "cast": ["Anurag Kashyap", "Konkona Sen Sharma"],
      "genres": ["Crime", "Suspense"],
      "image_url": "https://4kwallpapers.com/images/walls/thumbs/17917.jpg"
    },
    {
      "status": "Now Showing",
      "title": "Parallel Realms",
      "description": "A scientist experiments with parallel universes, only to find himself trapped in an alternate reality.",
      "cast": ["R Madhavan", "Shraddha Kapoor"],
      "genres": ["Sci-Fi", "Thriller"],
      "image_url": "https://4kwallpapers.com/images/walls/thumbs/17917.jpg"
    },
    {
      "status": "Now Showing",
      "title": "Parallel Realms",
      "description": "A scientist experiments with parallel universes, only to find himself trapped in an alternate reality.",
      "cast": ["R Madhavan", "Shraddha Kapoor"],
      "genres": ["Sci-Fi", "Thriller"],
      "image_url": "https://4kwallpapers.com/images/walls/thumbs/17917.jpg"
    }
];
// console.log(movie_data[0].cast[2]);

  return (
    <Container>
      <Row>
        {movie_data.map((movie_data) => (
          <Col className='my-4' md={4}>
            <Card
              style={{
                width: '18rem',
                whiteSpace: 'wrap',
                height: '31rem'
              }}>
              <Card.Header style={{ padding: " .1rem .3rem" }}>
                <Badge pill bg={movie_data.status === "Now Showing"?"primary":"success"}>
                  {movie_data.status}
                </Badge>
              </Card.Header>
              <Card.Img variant="top" style={{ height: '15rem' }} src={movie_data.image_url} />
              <Card.Body>
                <Card.Title>{movie_data.title}</Card.Title>
                <Card.Text>{movie_data.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{movie_data.cast[0]}</ListGroup.Item>
                <ListGroup.Item>{movie_data.cast[1]}</ListGroup.Item>
              </ListGroup>
              <Card.Footer>
                <i style={{ color: "grey" }}>{movie_data.genres.join(', ')}</i>
              </Card.Footer>
            </Card>
          </Col>
        )
        )
        }
      </Row>
    </Container>
  )
}

export default App
