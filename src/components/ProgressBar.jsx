
export default function ProgressBar({
  value = 0,
  max = 100,
  label = 'Progresso',
}) {
  const percentage = max > 0
    ? Math.min(100, Math.max(0, (value / max) * 100))
    : 0

  return (
    <div className="progress-container">
      <div className="progress-heading">
        <span>{label}</span>
        <span>{Math.round(percentage)}%</span>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-label={label}
        aria-valuenow={Math.round(percentage)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
