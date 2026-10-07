function ProgressBar({ progreso }) {
  return (
    <div
      className="barra"
      role="progressbar"
      aria-valuenow={progreso}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progreso"
    >
      <div className="barra-relleno" style={{ width: `${progreso}%` }} />
      <span className="barra-texto">{progreso}%</span>
    </div>
  );
}

export default ProgressBar;
