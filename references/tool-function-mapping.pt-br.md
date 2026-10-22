# Correspondência entre ferramentas e capacidades

Referência editorial baseada no glossário fornecido pelo proprietário. Esta tabela não faz parte do inventário publicado no site. Os nomes genéricos descrevem capacidades e não impõem uma tecnologia.

| Nome comercial ou de referência | Conceito funcional | O que faz |
| --- | --- | --- |
| Mage + kdv-pipelines | Orquestrador de pipelines ETL/ELT | Agenda e coordena a execução de pipelines, suas etapas, dependências e verificações de qualidade e linhagem. ETL transforma antes de carregar; ELT carrega antes de transformar. |
| SeaweedFS | Armazenamento de objetos | Guarda arquivos e objetos de dados que compõem o data lake e os disponibiliza para os serviços que precisam acedê-los. |
| Apache Iceberg | Formato aberto de tabelas analíticas | Organiza dados em tabelas sobre armazenamento de arquivos, com metadados que permitem a diferentes mecanismos ler e escrever os mesmos dados. |
| Hive Metastore | Catálogo técnico de tabelas | Regista metadados e localização das tabelas para que mecanismos de consulta e processamento as descubram e utilizem. |
| OpenMetadata | Catálogo de dados e plataforma de governança | Centraliza metadados, documentação, glossário, linhagem e informações de qualidade para facilitar a descoberta e a governança dos dados. |
| Apache Ranger | Gestão de políticas de acesso | Define, aplica e audita políticas que controlam quem pode aceder a dados e quais operações pode realizar. |
| Splink | Resolução de entidades e correspondência de registros | Compara registros e estima quais representam a mesma pessoa, organização ou entidade, mesmo quando os campos não coincidem exatamente. |
| Trino | Motor distribuído de consultas SQL | Executa consultas SQL sobre dados distribuídos em diferentes fontes ou armazenamentos, sem exigir que todos estejam no mesmo sistema. |
| WSO2 API Manager | Gestão de APIs | Publica, protege, controla e acompanha APIs, incluindo o acesso por aplicações consumidoras. |
| Apache Superset | Plataforma de BI e visualização de dados | Permite consultar dados e criar gráficos, análises visuais e painéis. |
| vassets (API / MCP) | Interface de serviços de dados para aplicações e IA | Expõe dados ou operações para consumo por aplicações e assistentes, por meio de APIs ou do protocolo MCP. A licença não está especificada no site. |
| Prometheus | Coleta e consulta de métricas | Recolhe e armazena métricas ao longo do tempo para monitorizar serviços e infraestrutura. |
| Loki | Agregação e consulta de logs | Reúne e permite pesquisar logs de serviços para investigar eventos e falhas. |
| Tempo | Rastreamento distribuído | Recolhe e permite consultar rastros de requisições que passam por vários serviços. |
| Grafana | Painéis de observabilidade | Apresenta métricas, logs e rastros em painéis para acompanhar a operação e investigar problemas. |
| Keycloak | Gestão de identidade e autenticação | Gere identidades, autenticação e início de sessão único (SSO) para aplicações e serviços. |
| OpenLDAP | Serviço de diretório | Armazena e disponibiliza informações de diretório, como identidades e atributos de utilizadores. |
| OpenBao | Gestão de segredos | Armazena e controla o acesso a credenciais, chaves e outros segredos utilizados por aplicações e serviços. |
| PostgreSQL | Base de dados relacional | Persiste e consulta dados estruturados em tabelas; no site, é indicado para registos operacionais e de controlo. |
| KDV Consumer | Portal de descoberta e consumo de dados | Apoia quem procura e utiliza dados com catálogo, pedidos de acesso com prazo, leitura de contratos e acompanhamento de concessões. |
| KDV Producer | Área de gestão e publicação de produtos de dados | Apoia a preparação e publicação de dados, incluindo domínios, subdomínios, contratos, versões, qualidade e decisões sobre pedidos de acesso. |
| KDV EcOps | Console de governança do ecossistema de dados | Apoia a gestão de políticas comuns, perfis de governança, papéis, decisões do fórum e indicadores do ecossistema. |
| KDV PlatOps | Console de operações da plataforma de dados | Apoia a operação de ambientes, serviços, alertas, certificados e segredos, sem expor os valores dos segredos. |
| KDV Desk | Central de atendimento de dados | Oferece um ponto comum para dúvidas, problemas e incidentes relacionados com dados. |
| Adapters | Adaptadores de integração da plataforma | Ligam o modelo às ferramentas escolhidas, permitindo integrar tecnologias sem manter versões separadas do produto. |
| Apache Airflow (alternativa mencionada) | Orquestrador de workflows e pipelines | Define, agenda e coordena workflows, incluindo pipelines de processamento de dados. O site cita-o como alternativa de orquestração. |
| dbt Core (alternativa mencionada) | Transformação de dados | Organiza e executa transformações, frequentemente escritas em SQL, para preparar dados para análise e consumo. O site cita-o como alternativa para transformação. |
| OpenLineage (alternativa mencionada) | Padrão de metadados de linhagem | Define como recolher e transportar informações sobre execuções e o percurso dos dados entre ferramentas. O site cita-o como alternativa para linhagem. |

Os módulos KDV são exemplos de interfaces, não ferramentas open source de terceiros. As alternativas também são exemplos. Licença, disponibilidade e adequação dependem da versão e do contexto; esta tabela não certifica uma distribuição.
