# Invoiceware
---
Os requisitos de negócio atendidos com esse projeto dizem respeito a:
- serviço que faça o controle de lançamentos
- serviço do consolidado diário
<br />
Esses requisitos não foram esgotados em sua complexidade, não há nenhum controle de valores para o primeiro serviço nem filtro relacionado a data para o segundo serviço. O foco foi a configuração de uma arquitetura desacoplada, com toda a tecnologia envolvida para executar as diferentes tarefas isoladas em interfaces e implementadas de modo acoplado apenas na camada de infra
<br />

---

> ## Boas Práticas de Programação
* Princípio da responsabilidade única 
* Princípio Aberto-Fechado
* Princípio da substituição de Liskov
* Princípio da Segregação da Interface
* Princípio da Inversão de Dependência

> ## Boas Práticas de Projeto
* Padronização nos commits, utilizando git-commit-msg-linter
* Padronização na estilistica do códio, utilizando eslint
* Garantia de commits com arquivos modificados testados automáticamente, utilizando o lintstage e o husky

## Como rodar o projeto
```typescript
docker-compose up
npm run dev
```

### Limitações
- Ao olharem para a pasta de tests perceberão que há apenas um teste que não testa nada. Isso ocorreu pq no processo de desenvolvimento ao procurar uma alternativa para simular o postgres em memória houve alguns problemas que inviabilizariam testes na camada de repositório e testes de integração. Para não perder a configuração de testes automáticos para cada commit foi adicionado esse teste fake. No futuro a implementação dos testes será realizada
- Havia a intenção de criar middlewares de autenticação, tanto jwt como 2fa, mas por conta do tempo será desenvolvido em uma próxima versão
- A intenção original era colocar tanto a aplicação quanto o banco de dados dentro de containers, mas nesse ponto também houve algumas limitações. Restringi portanto a somente o banco de dados no container.
