# INSTALAÇÃO
Para a intalaçao do TypeScript executa o seguinte comando: 
-- npm i -g typescript

Para a inserção do arquivo tsconfig.json executa o seguinte comando: 
-- tsc --init


# COMANDO PARA A EXECUÇÃO
Para rodar o programa execute: 
-- tsc

Para rodar o programa com a atualização automática execute: 
-- tsc -w


# PROBLEMAS NA EXECUÇÃO
Execute o PowerShell como administrador e altera temporariamente a política de execução de scripts para permitir a execução de scripts não assinados. Você pode fazer isso com o seguinte comando:
-- Set-ExecutionPolicy RemoteSigned

Lembre-se de que alterar a política de execução de scripts pode representar um risco de segurança, pois permite a execução de scripts não assinados. Certifique-se de restaurar a política de execução de scripts para o padrão assim que terminar de usar o TypeScript com seguinte comando:
-- Set-ExecutionPolicy Restricted

Saiba mais em: [about_Execution_Policies](https://go.microsoft.com/fwlink/?LinkID=135170)