### Introdução
# Todo-list

## Visão Geral

O **Todo-list** é um aplicativo simples de gerenciamento de tarefas, desenvolvido para ajudar os usuários a organizar suas atividades diárias. Na primeira versão, os usuários podem criar novas tarefas e marcá-las como concluídas, promovendo uma melhor produtividade.

## Interface no figma
[Visite o Figma do Todo-list](https://www.figma.com/design/Qx9iykh1zjRzTGaS7RxBKJ/Todo-list?node-id=3-362&node-type=canvas&t=eydElXHkH5hbCkAm-0)


## Funcionalidades

- **Criar Tarefas**: Permite ao usuário adicionar novas tarefas com descrições.
- **Marcar como Concluída**: O usuário pode marcar as tarefas como concluídas, facilitando o acompanhamento do progresso.
- **Visualização de Tarefas**: Lista todas as tarefas criadas, com um indicador de status (concluída ou pendente).

## Tecnologias Utilizadas

- **Front-end**: React Native (com Expo)
- **Gerenciamento de Estado**: Context API 
- **Armazenamento Local**: AsyncStorage
- **Interface de Usuário**: Styled Components

### Estrutura do projeto

Este repositório segue a metodologia Trunk Based Development (TBD), que promove a integração contínua e a entrega frequente de código. Todas as alterações devem ser pequenas, rapidamente integradas e revisadas, mantendo a branch principal (main) sempre pronta para produção.

No Trunk Based Development, evitamos o uso de longas branches. Utilizamos:

- main: A branch principal onde todo o código estável reside. Todas as integrações são feitas aqui, e o código deve estar sempre pronto para deploy.
- Feature branches (curta duração): Para pequenas funcionalidades ou melhorias. As feature branches são temporárias e devem ser mescladas rapidamente com a main.
- Nome: feature/nome-da-feature
- Hotfix branches: Para correções de bugs urgentes que precisam ser implementadas rapidamente. Devem ser mescladas diretamente na main e removidas logo após.
- Nome: hotfix/nome-do-hotfix

###Fluxo de Trabalho

1. Criar uma Branch de Curta Duração
   Sempre que for trabalhar em uma nova feature ou correção, crie uma branch a partir da main:

bash
Copiar código
git checkout main
git pull origin main # Certifique-se de que está atualizado
git checkout -b feature/nome-da-feature 2. Desenvolver Pequenas Funcionalidades
Faça commits pequenos e frequentes na sua branch temporária:

bash
Copiar código
git add .
git commit -m "Descrição clara do que foi feito" 3. Integração Contínua
Assim que a funcionalidade estiver concluída e testada, envie sua branch para o repositório remoto:

bash
Copiar código
git push origin feature/nome-da-feature 4. Pull Request e Revisão
Crie um Pull Request (PR) para a branch main. Envolva outros membros da equipe para revisar seu código:

Certifique-se de que o código passou pelos testes automatizados.
Receba feedback rapidamente e ajuste se necessário.
Exemplo de título de PR: Implementa nova funcionalidade de login

5. Fazer o Merge
   Após a aprovação do PR:

Integre (merge) a branch temporária na main.
Deletar a branch temporária após o merge:
bash
Copiar código
git checkout main
git pull origin main
git branch -d feature/nome-da-feature 6. Manter a main Estável
A branch main deve estar sempre estável e pronta para deploy.
Deploys frequentes garantem que o código mais recente esteja sempre em produção.
Se houver um problema na main, utilize uma branch de hotfix para resolver e integrar rapidamente.
Resolução de Conflitos
Se houver conflitos durante o merge, resolva-os o mais rápido possível. Isso evita a acumulação de grandes conflitos que dificultam a integração.

bash
Copiar código
git merge main

# Resolver os conflitos manualmente

git commit
git push origin feature/nome-da-feature
Regras de Boas Práticas
Pequenas mudanças: Divida grandes funcionalidades em partes menores e integre frequentemente.
Feedback rápido: Solicite revisões assim que uma funcionalidade estiver pronta.
Testes automáticos: O código deve passar nos testes automáticos antes de ser mesclado na main.
Mantenha o código simples: Priorize clareza e qualidade no código. Refatorações são bem-vindas, mas também devem ser pequenas e frequentes.
Deploy
Sempre que a main for atualizada, ela deve estar pronta para deploy. Se o projeto tiver um pipeline de CI/CD configurado, os deploys podem ser feitos automaticamente, ou manualmente conforme necessário.

Exemplo Completo de Workflow
Criar uma branch:

bash
Copiar código
git checkout main
git checkout -b feature/melhorar-performance
Desenvolver e fazer commits frequentes:

bash
Copiar código
git add .
git commit -m "Melhora a performance do carregamento da página inicial"
Enviar para o repositório remoto:

bash
Copiar código
git push origin feature/melhorar-performance
Criar um Pull Request no GitHub/GitLab e solicitar revisões.

Merge após aprovação:

bash
Copiar código
git checkout main
git pull origin main
git merge feature/melhorar-performance
Deletar a branch temporária:

bash
Copiar código
git branch -d feature/melhorar-performance
Notas Finais
Integrações rápidas e pequenas são a chave para o sucesso no TBD.
A colaboração através de pull requests e revisões de código garante a qualidade e estabilidade da main.
Este guia vai te ajudar e orientar sua equipe sempre que estiverem trabalhando juntos no modelo Trunk Based Development.
