import DemoGrid from './Grid.js'

export default {
  components: {
    DemoGrid
  },
  data: () => ({
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 },
      { name: 'Robin', power: 100000},
      { name: 'El prieto', power: 50000 },
      { name: 'Espina', power: 80000}
    ]
  })
}