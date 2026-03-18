export default function StatsCard({ icon: Icon, value, label, bg }) {
  return (
    <div className="stats-card">
      <div className="stats-icon" style={{ background: bg }}>
        <Icon />
      </div>

      <div className="stats-text">
        <div className="stats-value">{value}</div>
        <div className="stats-label">{label}</div>
      </div>
    </div>
  );
}
