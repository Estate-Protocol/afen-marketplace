import Container from "../components/Container";

export default function Home() {
  return (
    <Container style="flex flex-1 flex-col justify-center align-center h-screen">
      <div className="font-mono tracking-wide">
        <h1 className="text-4xl text-center">AFEN</h1>
        <p className="w-3/4 md:w-1/3 text-sm mx-auto text-center my-4">
          AFEN has the objective of combining blockchain’s immutable data
          structure and the backing of government bodies to provide legitimacy
          to products.
        </p>
      </div>
    </Container>
  );
}
