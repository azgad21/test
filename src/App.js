import ReceiveValue from "./components/ReceiveValue";
import Container from "./components/Container";
import Section from "./components/Section";
import Label from "./components/Label";
import H1 from "./components/H1";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <Container>
      <Section>
        <form onSubmit={ReceiveValue}>
          <H1>Calculando Serie N</H1>
          <Label>Capture un número para calcular la ecuación:</Label>
          <Label>
            Serie(n) = -3primo(n) - fibonacci(n) + 5trinagular(n + 1)
          </Label>
          <Input className="inputValue" type="number" />
          <Button type="submit">Calcular</Button>
        </form>
        <div className="serieResult"></div>
      </Section>
    </Container>
  );
}

export default App;
