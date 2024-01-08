console.time('abc')

console.log('ola')


console.group('Cursos');

   console.log('TreinaWeb')
   console.groupCollapsed('Categorias')
      console.log('Front-End');
      console.log('Back-End');
      console.log('Mobile');
   console.groupEnd()

   console.log('AvMakers')
   console.groupCollapsed('Categorias')
      console.log('Edição de Vídeo');
      console.log('Modelagem 3D');
      console.log('Motion Design');
   console.groupEnd()

console.groupEnd()


obj={
    nome: 'andre',
    idade: 45,
    olho: 'castanho',
    emprego: 'medico', 
    cidade:  'brède',
    hobby: ['correr', 'cozinhar', 'nadar']
}
console.table(obj)


// console.clear() limpa o console


console.timeEnd('abc')


// const spacing = '10px';
// const styles =`padding: ${spacing}; background-color: white; color: green; border:1px solid black; font-size: 2em;`;
// console.log('%cGeeks for Geeks', styles); só funciona no console da janela