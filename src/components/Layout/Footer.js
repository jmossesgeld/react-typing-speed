import { FaGithub } from "react-icons/fa";

const style = { position: "relative", margin: "0 auto", top: "50px", textAlign: "center" };

export default function Footer() {
  return (
    <footer style={style}>
      {"Made by:   jmossesgeld "}
      <a href="https://github.com/jmossesgeld/react-typing-speed">
        <FaGithub />
      </a>
    </footer>
  );
}
