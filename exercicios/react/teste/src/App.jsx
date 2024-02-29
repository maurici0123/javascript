import './App.css'


function App() {
  const htmlContent = '<span style="color: red;">Olá, mundo!</span>';

  return (
    <div>
      <h1>Exemplo de inserção de HTML:</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}


export default App