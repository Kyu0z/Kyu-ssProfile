import Container from "../../UI/Container/Container";
const Footer = () => {
  return (
    <footer>
      <Container className={`flex justify-center min-w-full bg-black`}>
        <span className="font-semibold text-md text-center p-3 text-white lg:text-xl">
          © Duy Khải. All Rights Reserved. Designed by Kyu
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
