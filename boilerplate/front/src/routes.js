function load(name) {
  return require(`./pages/${name}.vue`).default;
}

export default [
  { path: 'empty', component: load('empty') },
];
