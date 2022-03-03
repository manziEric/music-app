interface ComponentsProps {
  logo: string;
  altText: string;
}

function Logo({ logo, altText }: ComponentsProps) {
  return <img src={logo} alt={altText} />;
}

export default Logo;
