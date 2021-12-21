import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project</h1>
        <p>This is a react practice project that takes feedback</p>
        <Link to='/'>Back to Home</Link>
      </div>
    </Card>
  )
}

export default AboutPage
