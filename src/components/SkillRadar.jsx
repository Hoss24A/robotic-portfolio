import { Radar } from 'react-chartjs-2';

export function SkillsRadar() {
  const data = {
    labels: ['Python', 'JavaScript', 'React', 'Three.js', 'Node.js'],
    datasets: [{
      data: [90, 85, 80, 75, 70],
      backgroundColor: 'rgba(0, 255, 204, 0.2)',
      borderColor: '#00ffcc',
    }]
  };
  return <Radar data={data} />;
}