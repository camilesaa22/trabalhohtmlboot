
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import imgEducacao from './assets/3696093.png'
import imgPesquisa from './assets/imagem3 (1).png'
import imgMedicina from './assets/inteligencia-artificial-na-medicina.png'
import imgEnergia from './assets/energia-verde-capa.png'
import imgSocio from './assets/imagemmm.png'
import { Modal } from 'bootstrap';

document.querySelector('#app').innerHTML = /*html*/`
<!--Navbar-->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <i class="bi bi-door-closed"></i>Início</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Notícias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pesquisas</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Galeria
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Feedbacks</a></li>
            <li><a class="dropdown-item" href="#">Inscreva-se</a></li>
            <li><a class="dropdown-item" href="#">Mais sobre nós</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br>
<!--Imagem e texto-->


<div class="card text-bg-dark">
   <img src="${imgEducacao}" class="card-img" alt="educação" style="height: 250px">
  <div class="card-img-overlay">
    <h5 class="card-title" style ="font-size: 30px ">Ensino de qualidade</h5>
    <p class="card-text" style ="font-size: 22px">A educação é um dos pilares fundamentais para o desenvolvimento de uma sociedade mais justa e igualitária. Por meio dela, as pessoas adquirem conhecimentos, valores e habilidades que contribuem não apenas para o crescimento individual, mas também para o progresso coletivo. Investir em educação significa ampliar oportunidades, reduzir desigualdades e promover a cidadania, permitindo que cada indivíduo tenha condições de construir seu próprio futuro com autonomia e consciência crítica.</p>
    <p class="card-text"><small></small></p>
  </div>
</div>


<!--Modal-->


<div class="modal fade" id="meuModal" tabindex="-1">
<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal</h5>
     
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Você deseja continuar lendo?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
       <button class="btn btn-primary" data-bs-dismiss="modal">continuar</button>
  
      </div>
    </div>
  </div>
</div>
<br>
<!--Cards-->
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
       <img src="${imgPesquisa}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Pesquisa de inovação</h5>
        <p class="card-text">A inovação é a criação ou melhoria de ideias, produtos e processos que ajudam no desenvolvimento da sociedade. Na pesquisa, ela é importante porque traz soluções novas para problemas e impulsiona avanços em várias áreas, como tecnologia e sustentabilidade.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
       <img src="${imgMedicina}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Avanço na medicina</h5>
        <p class="card-text">O avanço da medicina trouxe melhorias importantes para a saúde, com novos tratamentos, medicamentos e tecnologias que permitem diagnósticos mais rápidos e precisos. Isso aumentou a qualidade e a expectativa de vida das pessoas,graças as crescentes inovações.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="${imgEnergia}" class="card-img-top" style="">
      <div class="card-body">
        <h5 class="card-title">Energia verde</h5>
        <p class="card-text">A energia verde é aquela gerada a partir de fontes renováveis e menos poluentes, como solar, eólica e hidrelétrica. Ela é importante porque ajuda a reduzir a emissão de gases que causam o aquecimento global e contribui para a preservação do meio ambiente. Além disso, promove um desenvolvimento mais sustentável para o futuro.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="${imgSocio}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Inovação socioecológica</h5>
        <p class="card-text">A inovação socioecológica é o desenvolvimento de soluções criativas que unem progresso social e preservação ambiental. Ela busca melhorar a qualidade de vida das pessoas ao mesmo tempo em que reduz impactos no meio ambiente, promovendo práticas sustentáveis em áreas como energia, agricultura e gestão de recursos naturais.</p>
      </div>
    </div>
  </div>
</div>
<!--footer-->
<footer class="bg-white text-dark text-center p-4 mt-5">
  <div class="container">
    <h5>Contato</h5>
    <p class="mb-1"> (85) 91234-5678</p>
    <p class="mb-1"> email1@exemplo.com</p>
    <p> Fortaleza-CE</p>
  </div>
</footer>

`
setTimeout(() => {
  const modal = new Modal(document.getElementById('meuModal'))
  modal.show()
}, 2000)
setupCounter(document.querySelector('#counter'))

