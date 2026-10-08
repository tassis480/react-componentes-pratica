import Aluno from './components/Aluno.jsx';
import Nota from './components/Nota.jsx';
import Produto from './components/Produto.jsx';
import Titulo from './components/Titulo.jsx';
import './App.css';

const alunos = [
  { nome: 'Carlos', turma: 'DS' },
  { nome: 'Ana', turma: 'DS' },
  { nome: 'Pedro', turma: 'DS' },
];

const notas = [
  { disciplina: 'React', nota: 8.5 },
  { disciplina: 'JavaScript', nota: 9 },
  { disciplina: 'HTML e CSS', nota: 7.5 },
];

const produtos = [
  {
    nome: 'Teclado Mecânico',
    descricao: 'Teclado com iluminação RGB',
    preco: 250,
    disponivel: true,
  },
  {
    nome: 'Mouse',
    descricao: 'Mouse sem fio',
    preco: 120,
    disponivel: true,
  },
  {
    nome: 'Headset',
    descricao: 'Headset confortável para uso diário',
    preco: 180,
    disponivel: false,
  },
  {
    nome: 'Webcam',
    descricao: 'Webcam com resolução Full HD',
    preco: 210,
    disponivel: true,
  },
];

export default function App() {
  return (
    <main className="app">
      <Titulo />

      <section>
        <h2>Alunos</h2>
        <div className="grade">
          {alunos.map((aluno) => (
            <Aluno key={aluno.nome} nome={aluno.nome} turma={aluno.turma} />
          ))}
        </div>
      </section>

      <section>
        <h2>Notas</h2>
        <div className="grade">
          {notas.map((item) => (
            <Nota
              key={item.disciplina}
              disciplina={item.disciplina}
              nota={item.nota}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Produtos</h2>
        <div className="grade produtos">
          {produtos.map((produto) => (
            <Produto key={produto.nome} {...produto} />
          ))}
        </div>
      </section>
    </main>
  );
}