import { useThemeContext } from "@/contexts/ThemeContext";

const ABCLogo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";
  
  const strokeColor = isDark ? "#E8C96D" : "#0B3D2E";
  const textColor = isDark ? "#EDF2EE" : "#0B3D2E";
  const triangleColor = isDark ? "#EDF2EE" : "#0B3D2E";
  const goldColor = "#E8C96D";

  return (
    <svg className={className} viewBox="0 0 230 100" role="img" xmlns="http://www.w3.org/2000/svg">
      <title>Africa Business College</title>
      <circle cx="50" cy="50" r="34" fill="none" stroke={strokeColor} strokeWidth="2"/>
      <polygon points="50,20 72,58 28,58" fill="none" stroke={triangleColor} strokeWidth="1.8" strokeLinejoin="round"/>
      <polygon points="50,80 28,42 72,42" fill="none" stroke={triangleColor} strokeWidth="1.8" strokeLinejoin="round"/>
      <rect x="44.5" y="44.5" width="11" height="11" rx="1.5" fill={goldColor} transform="rotate(45 50 50)"/>
      {[{cx:50,cy:20},{cx:72,cy:58},{cx:28,cy:58},{cx:50,cy:80},{cx:28,cy:42},{cx:72,cy:42}].map((p,i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="2.5" fill={goldColor}/>
      ))}
      <text x="96" y="38" fontFamily="'Playfair Display', Georgia, serif" fontSize="20" fontWeight="700" fill={textColor} letterSpacing="3">AFRICA</text>
      <line x1="96" y1="46" x2="196" y2="46" stroke={goldColor} strokeWidth="0.8"/>
      <text x="96" y="62" fontFamily="'Playfair Display', Georgia, serif" fontSize="12" fontWeight="600" fill={textColor} letterSpacing="4">BUSINESS</text>
      <text x="96" y="77" fontFamily="'Playfair Display', Georgia, serif" fontSize="12" fontWeight="600" fill={textColor} letterSpacing="4">COLLEGE</text>
    </svg>
  );
};

export default ABCLogo;
