// pages/index.js
import Head from 'next/head';
import Racetrack from './components/Racetrack';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Car Simulation</title>
        <meta name="description" content="Simulation of cars learning to drive around a race track using ML." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 style={styles.title}>Car Simulation Race Track</h1>
        <Racetrack width={800} height={400} />
    </div>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  title: {
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
  },
};
