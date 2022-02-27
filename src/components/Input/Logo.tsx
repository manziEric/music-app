interface ComponentsProps {
  logo: string;
  altText: string;
}

function Logo({ logo, altText }: ComponentsProps) {
  return <img src={logo} alt={altText} className="m-1" />;
}

export default Logo;
