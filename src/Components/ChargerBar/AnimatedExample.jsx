import './ChangeBar.css';

function AnimatedExample({ now }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${now}%` }}>
        {now + "%"}
      </div>
    </div>
  );
}

export default AnimatedExample;