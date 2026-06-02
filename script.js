const data = {
      ti: {
        headline: 'Estudante de Ciência da Computação • Foco em TI e Segurança',
        resumo: 'Estudante de Ciência da Computação com experiência profissional em análise forense documental, prevenção de perdas financeiras e com vivência prática em infraestrutura. Mantenho um Homelab Linux para self-hosting das minhas APIs e aplicações, e sempre estou buscando aprender mais sobre novas tecnologias, programas e metodologias para poder otimizá-lo. Procuro minha primeira oportunidade na área de tecnologia para trazer minhas habilidade de investigação e mitigação de riscos para o ambiente tecnológico, apoiando na administração de sistemas, a proteção de ambientes e o desenvolvimento de automações com Python e Javascript.',

        chips: ['Python', 'Javascript', 'SQL', 'Prevenção a Fraudes', 'Mitigação de Riscos', 'Linux', 'Google Workspace'],

        exp1Role: 'Analista de Prevenção à Fraude Jr • HS Prevent',

        exp1Bullets: `
          <li>Responsável pela análise forense de documentos para clientes de grande porte como Santander, Stellantis e Banco Pan, identificando padrões que resultaram na mitigação direta de riscos financeiros.</li>
          <li>Treinamento e desenvolvimento técnico de equipes operacionais.</li>
          <li>Gestão de demandas e prazos com SLAs rigorosos, mantendo alto nível de qualidade.</li>
        `,

        projetos: `

	<div class="item">
  <div class="top"><div class="where">Homelab / Servidor Pessoal (Linux)</div><div class="when">Atual</div></div>
  <ul>
    <li>Configuração e administração de um servidor Linux próprio para self-hosting de aplicações.</li>
    <li>Implementação de rede segura e acesso remoto utilizando Tailscale (WireGuard/VPN).</li>
    <li>Hospedagem e gestão de ambiente de desenvolvimento remoto (code-server) e outros serviços.</li>
  </ul>
</div>

          <div class="item">
            <div class="top"><div class="where">Automação de Validação de Dados (Projeto Pessoal)</div><div class="when">2025</div></div>
            <ul>
              <li>Desenvolvimento de script em Python para cruzar dados de planilhas e identificar inconsistências, reduzindo o tempo de análise manual.</li>
            </ul>
          </div>
          <div class="item">
            <div class="top"><div class="where">Workshop "Uso Excessivo do Celular" • CCSP</div><div class="when">2024</div></div>
            <ul>
              <li>Planejamento e execução de conteúdo educativo focado em conscientização e saúde digital.</li>
            </ul>
          </div>
        `,
        extras: `
          <div class="item"><strong>Programa de ensino com Python</strong> • Udemy - 60h</div>
          <div class="item"><strong>Gestão de Riscos (COSO)</strong> • ENAP - 20h</div>
          <div class="item"><strong>Projeto de Empreendedorismo • </strong>EZAPE ‑ ITAMAR</div>
        `
      },
      admin: {
        headline: 'Profissional Administrativo • Organização & Atendimento',
        resumo: 'Tenho experiência na área administrativa e de documentoscopia, foco em me manter organizado, cumprir os prazos e entregar um bom trabalho. Trabalhei com gestão de pessoas, análises forenses de documentos e desenvolvimento de equipe, e acredito que boa comunicação e trabalho em equipe fazem-nos superar desafios de formas mais eficientes e dinâmicas.',
        chips: ['Pacote Office','Google Workspace','Atendimento & Suporte','Criatividade','Gestão de Demandas','Comunicação','Trabalho em Equipe','Resolução de Problemas'],
        exp1Role: 'Analista de Prevenção à Fraude Jr • HS Prevent (Compliance)',
        exp1Bullets: `
          <li>Análise forense de documentos para diversos bancos, como Santander, Stellantis e Pan.</li>
          <li>Treinamento e desenvolvimento de equipes.</li>
          <li>Identificação de padrões suspeitos e mitigação de risco.</li>
          <li>Gestão de demandas e prazos com alto nível de qualidade.</li>
        `,
        projetos: `

          <div class="item">
            <div class="top"><div class="where">Workshop "Uso Excessivo do Celular" • CCSP</div><div class="when">2024</div></div>
            <ul>
              <li>Planejamento e execução de conteúdo educativo para a comunidade.</li>
              <li>Materiais com dados e dicas práticas; engajamento do público.</li>
            </ul>
          </div>
        `,
        extras: `
          <div class="item">Programa de ensino com Python</div>
          <div class="item">Gestão de Riscos em Processos de Trabalho (segundo o Coso)</div>
          <div class="item">Projeto de Empreendedorismo – EZAPE‑ITAMAR</div>
          <div class="item">Comunicação estratégica e empática</div>
        `
      }
    };

    const chipsEl = document.getElementById('chips');
    const resumoEl = document.getElementById('resumo');
    const headlineEl = document.getElementById('headline');
    const exp1RoleEl = document.getElementById('exp1-role');
    const exp1BulletsEl = document.getElementById('exp1-bullets');
    const projetosEl = document.getElementById('projetos');
    const extrasEl = document.getElementById('extras');

    function renderChips(list){
      chipsEl.innerHTML = '';
      list.forEach(t => {
        const pill = document.createElement('span');
        pill.className = 'pill';
        pill.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" opacity=".12"></circle><path d="M8 12l2.5 2.5L16 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>${t}`;
        chipsEl.appendChild(pill);
      })
    }

    function setMode(mode){
      const d = data[mode];
      headlineEl.textContent = d.headline;
      resumoEl.textContent = d.resumo;
      exp1RoleEl.textContent = d.exp1Role;
      exp1BulletsEl.innerHTML = d.exp1Bullets;
      projetosEl.innerHTML = d.projetos;
      extrasEl.innerHTML = d.extras;
      renderChips(d.chips);
      document.getElementById('tab-ti').classList.toggle('active', mode==='ti');
      document.getElementById('tab-admin').classList.toggle('active', mode==='admin');
    }

    document.getElementById('tab-ti').addEventListener('click', () => setMode('ti'));
    document.getElementById('tab-admin').addEventListener('click', () => setMode('admin'));
    document.getElementById('print').addEventListener('click', () => window.print());

    // Inicializa no modo TI
    setMode('ti');