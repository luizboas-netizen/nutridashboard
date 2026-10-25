
import { useState } from 'react'
import './App.css'
import DropdownMenu from './components/DropdownMenu'
import { useToast } from './context/ToastContext'
import Tabs from './components/Tabs'
import ProgressBar from './components/ProgressBar'
import Toast from './components/Toast'
import Pagination from './components/Pagination'
import Accordion from './components/Accordion'
function App() {
  const [activeTab, setActiveTab] = useState('Visão geral')

  const menuItems = [
    'Visão geral',
    'Pacientes',
    'Agenda',
    'Financeiro',
    'Marketing',
  ]
const pacientesDemo = [
  { id: 1, nome: 'Ana Oliveira', objetivo: 'Emagrecimento' },
  { id: 2, nome: 'Pedro Santos', objetivo: 'Hipertrofia' },
  { id: 3, nome: 'Mariana Costa', objetivo: 'Reeducação alimentar' },
  { id: 4, nome: 'Lucas Almeida', objetivo: 'Hipertrofia' },
  { id: 5, nome: 'Juliana Rocha', objetivo: 'Emagrecimento' },
  { id: 6, nome: 'Gabriel Lima', objetivo: 'Saúde e bem-estar' },
  { id: 7, nome: 'Beatriz Souza', objetivo: 'Reeducação alimentar' },
  { id: 8, nome: 'Rafael Mendes', objetivo: 'Emagrecimento' },
  { id: 9, nome: 'Camila Ferreira', objetivo: 'Saúde e bem-estar' },
  { id: 10, nome: 'Bruno Martins', objetivo: 'Hipertrofia' },
]
const { showToast } = useToast()
  return (
    <div className="app">
      <Toast
  message="NutriDashboard funcionando corretamente!"
  type="success"
/>
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">N</div>
          <div>
            <h1>NutriDashboard</h1>
            <span>GESTÃO INTELIGENTE</span>
          </div>
        </div>

        <p className="menu-label">MENU PRINCIPAL</p>

        <nav aria-label="Menu principal" className="navigation">
          {menuItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${activeTab === item ? 'active' : ''}`}
              onClick={() => setActiveTab(item)}
              aria-current={activeTab === item ? 'page' : undefined}
            >
              <span className="nav-dot" aria-hidden="true" />
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="profile-avatar">NP</div>
          <div>
            <strong>Nutricionista</strong>
            <span>Administrador</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <span className="eyebrow">SEGUNDA-FEIRA, 26 DE OUTUBRO</span>
            <h2>Olá, nutricionista! <span>👋</span></h2>
            <p>Acompanhe os resultados do seu consultório.</p>
          </div>

          <button
            className="primary-button"
            onClick={() => alert('Área de novo agendamento em breve!')}
          >
            + Novo agendamento
          </button>
        </header>

        <section className="welcome-banner" aria-label="Resumo do consultório">
          <div>
            <span className="banner-tag">SEU CONSULTÓRIO EM FOCO</span>
            <h3>Cuidar da sua gestão também é cuidar de pessoas.</h3>
            <p>
              Visualize seus resultados, organize sua rotina e encontre novas
              oportunidades para crescer.
            </p>
          </div>
          <div className="banner-decoration" aria-hidden="true">
            <span>✳</span>
            <span>◒</span>
            <span>＋</span>
          </div>
        </section>

        <section className="section" aria-labelledby="overview-title">
          <div className="section-heading">
            <div>
              <h3 id="overview-title">{activeTab}</h3>
              <p>Resumo ilustrativo do seu consultório</p>
            </div>
            <span className="period-label">Este mês ▾</span>
          </div>

          <div className="stats-grid">
            <article className="stat-card">
              <div className="stat-top">
                <span>Receita mensal</span>
                <span className="stat-icon green">R$</span>
              </div>
              <strong>R$ 8.450,00</strong>
              <span className="stat-change positive">↑ 12,5% <span>vs. mês anterior</span></span>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>Consultas realizadas</span>
                <span className="stat-icon blue">↗</span>
              </div>
              <strong>48</strong>
              <span className="stat-change positive">↑ 8,2% <span>vs. mês anterior</span></span>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>Pacientes ativos</span>
                <span className="stat-icon orange">♡</span>
              </div>
              <strong>36</strong>
              <span className="stat-description">Na sua carteira de pacientes</span>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>Despesas do mês</span>
                <span className="stat-icon red">↓</span>
              </div>
              <strong>R$ 2.180,00</strong>
              <span className="stat-description">25,8% da receita mensal</span>
            </article>
          </div>
        </section>

        <section className="content-grid">
          <article className="panel">
            <div className="panel-heading">
              <div>
                <h3>Próximas consultas</h3>
                <p>Sua agenda de hoje</p>
              </div>
              <button className="text-button" onClick={() => setActiveTab('Agenda')}>
                Ver agenda →
              </button>
            </div>

            <div className="appointment">
              <div className="appointment-time">09:00</div>
              <div className="patient-avatar avatar-one">AM</div>
              <div className="appointment-info">
                <strong>Ana Martins</strong>
                <span>Consulta de retorno</span>
              </div>
              <span className="status confirmed">Confirmada</span>
            </div>

            <div className="appointment">
              <div className="appointment-time">10:30</div>
              <div className="patient-avatar avatar-two">RC</div>
              <div className="appointment-info">
                <strong>Rafael Costa</strong>
                <span>Primeira consulta</span>
              </div>
              <span className="status pending">Pendente</span>
            </div>

            <div className="appointment">
              <div className="appointment-time">14:00</div>
              <div className="patient-avatar avatar-three">JS</div>
              <div className="appointment-info">
                <strong>Julia Santos</strong>
                <span>Consulta de retorno</span>
              </div>
              <span className="status confirmed">Confirmada</span>
            </div>
          </article>

          <article className="panel">
            <div className="panel-heading">
              <div>
                <h3>Meta financeira</h3>
                <p>Objetivo de receita mensal</p>
              </div>
              <span className="target-icon">◎</span>
            </div>

            <div className="goal-value">
              <strong>R$ 8.450</strong>
              <span>de R$ 10.000</span>
            </div>

            <div
              className="progress-track"
              role="progressbar"
              aria-label="Meta financeira mensal"
              aria-valuenow={84.5}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-fill" style={{ width: '84.5%' }} />
            </div>

            <div className="progress-caption">
              <span>84,5% da meta atingida</span>
              <strong>R$ 1.550 restantes</strong>
            </div>

            <div className="insight">
              <span aria-hidden="true">✦</span>
              <div>
                <strong>Dica para crescer</strong>
                <p>Você está perto da meta. Acompanhe os retornos para aproveitar melhor sua agenda.</p>
              </div>
            </div>
          </article>
        </section>

<section className="section" aria-labelledby="tips-title">
  <div className="section-heading">
    <div>
      <h3 id="tips-title">Central de orientações</h3>
      <p>Informações para ajudar na gestão do consultório</p>
    </div>
  </div>

  <div className="panel">
    <Accordion
      items={[
        {
          title: 'Como melhorar a retenção de pacientes?',
          content:
            'Acompanhe os retornos, mantenha os registros atualizados e organize lembretes para pacientes que estão há muito tempo sem consulta.',
        },
        {
          title: 'Como acompanhar a saúde financeira?',
          content:
            'Compare receitas e despesas, acompanhe os valores a receber e revise mensalmente os resultados em relação às suas metas.',
        },
        {
          title: 'Como aproveitar melhor a agenda?',
          content:
            'Observe os horários com menor procura e avalie estratégias para preenchê-los, sempre considerando a disponibilidade dos pacientes.',
        },
      ]}
    />
  </div>
</section>

<section className="section" aria-labelledby="patients-title">
  <div className="section-heading">
    <div>
      <h3 id="patients-title">Pacientes</h3>
      <p>Lista demonstrativa de pacientes do consultório</p>
    </div>
  </div>

  <div className="panel">
    <Pagination
      items={pacientesDemo}
      itemsPerPage={5}
      
renderItem={(paciente) => (
  <div className="patient-row">
    <div className="patient-avatar" aria-hidden="true">
      {paciente.nome.charAt(0)}
    </div>

    <div className="patient-info">
      <strong>{paciente.nome}</strong>
      <span>{paciente.objetivo}</span>
    </div>

    <div className="patient-actions">
      <DropdownMenu
        onAction={(action) => {
          showToast(`${action}: ${paciente.nome}`, 'info')
        }}
      />
    </div>
  </div>
)}

    />
  </div>
</section>

<section className="section" aria-labelledby="goals-title">
  <div className="section-heading">
    <div>
      <h3 id="goals-title">Metas financeiras</h3>
      <p>Acompanhe o desempenho mensal do consultório</p>
    </div>
  </div>

  <div className="panel">
    <ProgressBar
      label="Meta de receitas do mês"
      value={7500}
      max={10000}
    />

    <p className="goal-description">
      R$ 7.500 de R$ 10.000 alcançados neste mês.
    </p>
  </div>
</section>

<section className="section" aria-labelledby="financial-tabs-title">
  <div className="section-heading">
    <div>
      <h3 id="financial-tabs-title">Resumo financeiro</h3>
      <p>Alterne entre os indicadores do consultório</p>
    </div>
  </div>

  <div className="panel">
    <Tabs
      tabs={[
        {
          label: 'Receitas',
          content: (
            <div className="financial-tab-content">
              <span>Total recebido no mês</span>
              <strong>R$ 8.450,00</strong>
              <p>Valores fictícios para demonstração.</p>
            </div>
          ),
        },
        {
          label: 'Despesas',
          content: (
            <div className="financial-tab-content">
              <span>Total de despesas no mês</span>
              <strong>R$ 2.150,00</strong>
              <p>Valores fictícios para demonstração.</p>
            </div>
          ),
        },
        {
          label: 'Saldo',
          content: (
            <div className="financial-tab-content">
              <span>Saldo mensal</span>
              <strong>R$ 6.300,00</strong>
              <p>Receitas menos despesas, usando dados fictícios.</p>
            </div>
          ),
        },
      ]}
    />
  </div>
</section>

        <footer className="footer">
          <span>NutriDashboard © 2026</span>
          <span>Dados fictícios para demonstração acadêmica</span>
        </footer>
      </main>
    </div>
  )
}

export default App
