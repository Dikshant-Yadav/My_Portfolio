import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner-wrapper">
      <svg className="banner-svg" viewBox="0 0 700 150">
        <text
          className="banner-text"
          x="50%"
          y="120"
          textAnchor="middle"
          dominantBaseline="auto"
        >
          दीक्षांत
        </text>
      </svg>
    </div>
  );
}